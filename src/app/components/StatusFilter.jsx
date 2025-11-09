'use client';

export default function StatusFiilter({value, onChange}) {
    const options = ["All", "Open", "In Progress", "On Hold", "Resolved"];

    return (
        <label style={{fontSize: "0.85rem"}}>
            Status:{" "}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{padding: "0.25"}}
            >
                {options.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
                </select>
            </label>
    );
}