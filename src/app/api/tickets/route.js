import {NextResponse} from "next/server";


    const tickets = [
        {"id": "t-1001",
            "title": "Cannot connect to VPN",
            "description": "User reports intermittent VPN connectivity errors.",
            "priority": "High",
            "status": "Open",
            "assignee": "Unassigned",
            "updatedAt": "2025-10-31T14:05:00Z"
        },
        {
            "id": "t-1002",
            "title": "Email not syncing on Outlook",
            "description": "Employee's Outlook client fails to sync new messages.",
            "priority": "Medium",
            "status": "In Progress",
            "assignee": "Michael Tran",
            "updatedAt": "2025-10-30T09:20:00Z"
        },
        {
            "id": "t-1003",
            "title": "Printer offline in HR department",
            "description": "HR office printer not responding to print jobs.",
            "priority": "Low",
            "status": "Resolved",
            "assignee": "Sarah Lopez",
            "updatedAt": "2025-10-29T11:47:00Z"
        },
        {
            "id": "t-1004",
            "title": "Password reset request",
            "description": "User forgot password and is locked out of account.",
            "priority": "Low",
            "status": "Resolved",
            "assignee": "John Smith",
            "updatedAt": "2025-10-31T08:15:00Z"
        },
        {
            "id": "t-1005",
            "title": "Server CPU usage spike",
            "description": "Production server showing consistent 95% CPU utilization.",
            "priority": "Critical",
            "status": "In Progress",
            "assignee": "Ava Patel",
            "updatedAt": "2025-10-31T16:45:00Z"
        },
        {
            "id": "t-1006",
            "title": "Slow Wi-Fi on 3rd floor",
            "description": "Multiple users reporting slow wireless connection speeds.",
            "priority": "Medium",
            "status": "Open",
            "assignee": "Unassigned",
            "updatedAt": "2025-10-28T13:00:00Z"
        },
        {
            "id": "t-1007",
            "title": "Software license renewal",
            "description": "Renew annual Adobe Creative Cloud licenses before expiration.",
            "priority": "High",
            "status": "On Hold",
            "assignee": "Liam Carter",
            "updatedAt": "2025-10-27T09:10:00Z"
        },
        {
            "id": "t-1008",
            "title": "Database backup verification failed",
            "description": "Nightly SQL backup integrity check did not complete successfully.",
            "priority": "Critical",
            "status": "Open",
            "assignee": "Sophia Kim",
            "updatedAt": "2025-10-31T07:30:00Z"
        },
        {
            "id": "t-1009",
            "title": "Laptop battery draining too fast",
            "description": "User reports battery life decreased drastically after update.",
            "priority": "Medium",
            "status": "In Progress",
            "assignee": "Noah Williams",
            "updatedAt": "2025-10-30T17:22:00Z"
        },
        {
            "id": "t-1010",
            "title": "New user onboarding setup",
            "description": "Prepare new hire account, email, and workstation setup.",
            "priority": "Low",
            "status": "On Hold",
            "assignee": "Unassigned",
            "updatedAt": "2025-10-25T12:05:00Z"
        },
        {
            "id": "t-1011",
            "title": "Antivirus alerts on finance computers",
            "description": "Several finance PCs showing repeated malware detection pop-ups.",
            "priority": "High",
            "status": "In Progress",
            "assignee": "Ethan Davis",
            "updatedAt": "2025-10-31T15:42:00Z"
        },
        {
            "id": "t-1012",
            "title": "Remote desktop lag",
            "description": "Remote users experiencing lag when accessing internal systems.",
            "priority": "Medium",
            "status": "Open",
            "assignee": "Unassigned",
            "updatedAt": "2025-10-31T10:55:00Z"
        },
        {
            "id": "t-1013",
            "title": "Website SSL certificate expired",
            "description": "Public-facing company website showing SSL expiration warning.",
            "priority": "Critical",
            "status": "Resolved",
            "assignee": "Emma Rodriguez",
            "updatedAt": "2025-10-30T06:30:00Z"
        },
        {
            "id": "t-1014",
            "title": "Monitor flickering issue",
            "description": "User reports screen flickering intermittently on Dell monitor.",
            "priority": "Low",
            "status": "Open",
            "assignee": "Unassigned",
            "updatedAt": "2025-10-29T14:12:00Z"
        },
        {
            "id": "t-1015",
            "title": "HR system login errors",
            "description": "Employees unable to log into HR portal using company credentials.",
            "priority": "High",
            "status": "In Progress",
            "assignee": "Isabella Nguyen",
            "updatedAt": "2025-10-31T13:48:00Z"
        },
        {
            "id": "t-1016",
            "title": "File server storage capacity warning",
            "description": "File server reaching 90% disk utilization; cleanup required.",
            "priority": "High",
            "status": "Open",
            "assignee": "Unassigned",
            "updatedAt": "2025-10-31T09:25:00Z"
        }
    ];

    return new Response(JSON.stringify(tickets), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });

export async function GET() {
    return NextResponse.json(tickets);
}