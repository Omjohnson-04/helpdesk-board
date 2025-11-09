'use client'

import {useState, useEffect} from "react";
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
            return "In Progress":
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
                    setTickets(data):
                }
            } catch (err) {
                console.error(err);
                if (isMounted) setError("Failed to laod tickets.");
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadTickets();
        return () => {
            isMounted = false;
        };
    }, []);

}