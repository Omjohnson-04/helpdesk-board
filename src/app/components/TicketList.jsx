'use client';

import TicketCard from "./TicketCard";

export default function TicketList({tickets, queue, onAddToQueue}) {
    if (!tickets || tickets.length === 0) return null;
    return (
        <div
            classname="ticketlist"
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "1rem",
                marginBottom: "2rem"
            }}
        >
            {tickets.map((ticket) => (
                <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    isQueued={!!queue[ticket.id]}
                    onAddToQueue={() => onAddToQueue(ticket.id)}
                />
            ))}
        </div>
    );
}