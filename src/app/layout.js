import React from "react";

export const metadata = {
  title: "Helpdesk Board",
  description: "Live helpdesk ticket dashboard with filters and queue"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#f9f9f9",
          color: "#111",
          minHeight: "100vh",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, -sans-serif"
        }}
      >
        {children}
      </body>
    </html>
  );
}
