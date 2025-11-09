'use client'

export default function TicketCard({ ticket, isQueued, onAddToQueue }) {
  const updated = new Date(ticket.updatedAt).toLocaleString();

  return (
    <div
      className="ticket-card"
      style={{
        border: "1px solid #e2e2e2",
        borderRadius: "8px",
        padding: "0.75rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.35rem"
      }}
    >
      <h3 style={{ margin: 0 }}>{ticket.title}</h3>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#444" }}>
        {ticket.description}
      </p>
      <div
        className="meta"
        style={{ display: "flex", flexDirection: "column", fontSize: "0.8rem" }}
      >
        <span>
          <strong>Priority:</strong> {ticket.priority}
        </span>
        <span>
          <strong>Status:</strong> {ticket.status}
        </span>
        <span>
          <strong>Assignee:</strong> {ticket.assignee}
        </span>
        <span>
          <strong>Updated:</strong> {updated}
        </span>
      </div>
      <button
        type="button"
        onClick={onAddToQueue}
        disabled={isQueued}
        style={{
          marginTop: "0.35rem",
          padding: "0.4rem 0.6rem",
          borderRadius: "4px",
          border: "none",
          cursor: isQueued ? "default" : "pointer",
          opacity: isQueued ? 0.6 : 1
        }}
      >
        {isQueued ? "In My Queue" : "Add to My Queue"}
      </button>
      {isQueued && (
        <span
          className="hint"
          style={{ fontSize: "0.7rem", color: "#666", marginTop: "0.1rem" }}
        >
          This ticket is already in your queue.
        </span>
      )}
    </div>
  );
}
