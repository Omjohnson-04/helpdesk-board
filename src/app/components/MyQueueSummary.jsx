'use client'

export default function MyQueueSummary({
    tickets,
    queue,
    onRemove,
    onClear
  }) {
    const queuedTickets = tickets.filter((t) => queue[t.id]);
  
    return (
      <aside
        className="my-queue"
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1rem",
          borderRadius: "8px",
          border: "1px solid #e2e2e2",
          background: "#fafafa"
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>
          My Queue ({queuedTickets.length})
        </h2>
  
        {queuedTickets.length === 0 ? (
          <p style={{ fontSize: "0.85rem", color: "#555" }}>
            No tickets in your queue yet. Add some to keep track of your work.
          </p>
        ) : (
          <>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 0.5rem 0",
                fontSize: "0.85rem"
              }}
            >
              {queuedTickets.map((t) => (
                <li
                  key={t.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.2rem 0"
                  }}
                >
                  <span>{t.title}</span>
                  <button
                    type="button"
                    onClick={() => onRemove(t.id)}
                    style={{
                      padding: "0.2rem 0.4rem",
                      fontSize: "0.75rem",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onClear}
              style={{
                padding: "0.35rem 0.6rem",
                fontSize: "0.8rem",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Clear Queue
            </button>
          </>
        )}
      </aside>
    );
  }