'use client';

export default function SearchBox({ value, onChange }) {
    return (
      <label style={{ fontSize: "0.85rem", flexGrow: 1 }}>
        Search:{" "}
        <input
          type="text"
          placeholder="Search by title or description..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: "100%",
            padding: "0.3rem",
            marginTop: "0.15rem",
            boxSizing: "border-box"
          }}
        />
      </label>
    );
  }