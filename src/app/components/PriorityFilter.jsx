'use client'

const options = ["All", "Low", "Medium", "High", "Critical"];

export default function PriorityFilter({value,onChange}) {
    return (
        <label style={{fontSize:"0.85rem"}}>
            Priority:{" "}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{padding:"0.25rem"}}
            >
                {options.map((priotrity) => (
                    <option key={priority} value={priority}>
                        {priority}
                    </option>
                ))}
            </select>
        </label>
    );
}