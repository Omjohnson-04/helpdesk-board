'use client';

import {useState, useEffect, use} from "react";
import StatusFilter from "./StatusFilter";
import PriorityFilter from "./PriorityFilter";
import SearchBox from "./SearchBox";
import TicketList from "./TicketList";
import MyQueueSummary from "./MyQueueSummary";
import StatusMessage from "./StatusMessage";

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNextStatus(current) {
    switch (current) {
        case "Open":
            return "In Progress";
        case "In Progress":
            return Math.random() < 0.7 ? "Resolved" : "On Hold";
        case "On Hold":
            return Math.random() < 0.5 ? "In Progress" : "Open";
        case "Resolved":
        default:
            return "Resolved";
    }
}

function getNextPriority(current) {
    const priorities = ["Low", "Medium", "High", "Critical"];
    const idx = priorities.indexOf(current);
    if (idx === -1) return current;

    if (current === "Critical") {
        return Math.random() < 0.5 ? "High" : "Critical";
    }
    if (current === "Low") {
        return Math.random() < 0.5 ? "Medium" : "Low";
    }

    const dir = Math.random() < 0.5 ? -1 : 1;
    const nextIdx = Math.min(Math.max(idx + dir, 0), priorities.length - 1);
    return priorities[nextIdx];
}

export default function Board() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [filters, setFilters] = useState({
        status: "All",
        priority: "All"
    });

    const [search, setSearch] = useState("");
    const [queue, setQueue] = useState({});

    useEffect(() => {
        let isMounted = true;

        async function loadTickets() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch("/api/tickets");
                if (!res.ok) throw new Error("Network response was not ok");
                const data = await res.json();

                if (isMounted) {
                    setTickets(data);
                }
            } catch (err) {
                console.error(err);
                if (isMounted) setError("Failed to load tickets.");
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadTickets();
        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (!tickets.length) return;
    
        let cancelled = false;
        let timeoutId = null;
    
        const scheduleNext = () => {
          const delay = randomInt(6000, 10000);
          timeoutId = setTimeout(() => {
            if (cancelled) return;
    
            setTickets((prev) => {
              if (!prev.length) return prev;
    
              const index = Math.floor(Math.random() * prev.length);
              const original = prev[index];
              if (!original) return prev;
    
              const updated = { ...original };
    
              if (Math.random() < 0.5) {
                updated.status = getNextStatus(original.status);
              } else {
                updated.priority = getNextPriority(original.priority);
              }
    
              updated.updatedAt = new Date().toISOString();
    
              const next = [...prev];
              next[index] = updated;
              return next;
            });
    
            scheduleNext();
          }, delay);
        };
    
        scheduleNext();
    
        return () => {
          cancelled = true;
          if (timeoutId) clearTimeout(timeoutId);
        };
    }, [tickets.length]);

    const handleStatusChange = (status) =>
        setFilters((prev) => ({ ...prev, status }));
    
    const handlePriorityChange = (priority) =>
        setFilters((prev) => ({ ...prev, priority }));
    
    const handleSearchChange = (value) => setSearch(value);
    
    const handleAddToQueue = (ticketId) => {
        setQueue((prev) => {
          if (prev[ticketId]) return prev; // no duplicates
          return { ...prev, [ticketId]: true };
        });
    };
    
    const handleRemoveFromQueue = (ticketId) => {
        setQueue((prev) => {
          const next = { ...prev };
          delete next[ticketId];
          return next;
        });
    };
    
    const handleClearQueue = () => setQueue({});

    const visibleTickets = tickets.filter((t) => {
        const matchesStatus =
          filters.status === "All" || t.status === filters.status;
    
        const matchesPriority =
          filters.priority === "All" || t.priority === filters.priority;
    
        const q = search.trim().toLowerCase();
        const text = (t.title + " " + t.description).toLowerCase();
        const matchesSearch = !q || text.includes(q);
    
        return matchesStatus && matchesPriority && matchesSearch;
      });
    
      const isEmpty =
        !loading && !error && visibleTickets && visibleTickets.length === 0;
    
      return (
        <section className="board">
          <div
            className="controls"
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-end",
              flexWrap: "wrap",
              margin: "1rem 0"
            }}
          >
            <StatusFilter value={filters.status} onChange={handleStatusChange} />
            <PriorityFilter
              value={filters.priority}
              onChange={handlePriorityChange}
            />
            <SearchBox value={search} onChange={handleSearchChange} />
          </div>
    
          <StatusMessage loading={loading} error={error} isEmpty={isEmpty} />
    
          {!loading && !error && visibleTickets.length > 0 && (
            <TicketList
              tickets={visibleTickets}
              queue={queue}
              onAddToQueue={handleAddToQueue}
            />
          )}
    
          <MyQueueSummary
            tickets={tickets}
            queue={queue}
            onRemove={handleRemoveFromQueue}
            onClear={handleClearQueue}
          />
        </section>
      );
    }