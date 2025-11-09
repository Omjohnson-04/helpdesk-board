'use client';

export default function StatusMessage({loading, error, isempty}) {
    if(loading) {
        return <p className="status-message">Loading...</p>;
    }

    if(error) {
        return (
            <p className="status-message" style={{color: "red"}}>
                Unable to load tickets.
            </p>
        );
    }

    if (isEmpty) {
        return (
            <p className="status-message">
                No tickets match your filters.
            </p>
        );
    }

    return null;
}