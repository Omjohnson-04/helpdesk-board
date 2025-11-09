import Board from "./components/Board";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Helpdesk Ticket Board</h1>
        <p>Live ticket overview with filter, search, and your personal queue.</p>
      </header>
      <Board />
    </main>
  );
}