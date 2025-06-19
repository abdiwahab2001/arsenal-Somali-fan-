import { PlayCircle, UploadCloud } from "lucide-react";

export default function Home() {
  return (
    <main style={{
      backgroundColor: "#000", color: "#fff", minHeight: "100vh", padding: "2rem", fontFamily: "sans-serif"
    }}>
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", color: "#facc15" }}>Premier League Cast 2025/2026</h1>
        <p style={{ color: "#ccc", fontSize: "1.2rem" }}>Live Podcast | Matchday Reactions | Bold Opinions</p>
      </section>

      <section style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {[1, 2, 3].map((ep) => (
          <div key={ep} style={{ border: "1px solid #facc15", background: "#1a1a1a", padding: "1rem", borderRadius: "10px" }}>
            <h2 style={{ fontSize: "1.5rem", color: "#facc15" }}>Episode {ep}</h2>
            <p style={{ color: "#aaa", fontSize: "0.9rem" }}>Premier League Matchday {ep} Analysis & Commentary</p>
            <button style={{
              backgroundColor: "#facc15", color: "#000", padding: "0.5rem 1rem", borderRadius: "5px", marginTop: "1rem", width: "100%"
            }}>
              <PlayCircle size={20} style={{ marginRight: "0.5rem", verticalAlign: "middle" }} /> Listen Now
            </button>
          </div>
        ))}
      </section>

      <section style={{ marginTop: "4rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#facc15" }}>Upload New Episode</h2>
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <input type="file" />
          <button style={{
            backgroundColor: "#facc15", color: "#000", padding: "0.5rem 1rem", borderRadius: "5px"
          }}>
            <UploadCloud size={20} style={{ marginRight: "0.5rem", verticalAlign: "middle" }} /> Upload
          </button>
        </div>
      </section>

      <footer style={{ marginTop: "4rem", textAlign: "center", color: "#666", fontSize: "0.8rem" }}>
        &copy; 2025 Premier League Cast. Built by Abdiwahab.
      </footer>
    </main>
  );
}