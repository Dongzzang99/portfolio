
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="section">
        <div className="container">
          <div className="card" style={{ padding: 32 }}>
            <p className="muted" style={{ marginTop: 0 }}>Blog</p>
            <h1 style={{ fontSize: 40, fontWeight: 900, marginTop: 8 }}>
              기술 기록 공간
            </h1>
            <p className="muted" style={{ lineHeight: 1.9 }}>
              여기는 나중에 회고, 트러블슈팅, 공부한 내용을 정리하는 공간으로 쓰면 돼.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}