import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="section">
        <div className="container">
          <div className="card" style={{ padding: 36, maxWidth: 980 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
              {project.tech.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>

            <h1 className="section-title" style={{ marginBottom: 16 }}>
              {project.title}
            </h1>

            <p className="muted" style={{ lineHeight: 1.9, fontSize: 17, margin: 0 }}>
              {project.description}
            </p>

            <div className="detail-meta">
              <div>
                <div className="muted">역할</div>
                <strong>{project.role}</strong>
              </div>
              <div>
                <div className="muted">구분</div>
                <strong>{project.type}</strong>
              </div>
              <div>
                <div className="muted">기간</div>
                <strong>{project.period}</strong>
              </div>
            </div>

            <section className="detail-section">
              <h2>프로젝트 소개</h2>
              <p>{project.content.overview}</p>
            </section>

            <section className="detail-section">
              <h2>주요 기능</h2>
              <ul>
                {project.content.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <h2>문제 상황</h2>
              <p>{project.content.trouble}</p>
            </section>

            <section className="detail-section">
              <h2>해결 방법</h2>
              <p>{project.content.solution}</p>
            </section>

            <section className="detail-section">
              <h2>성과 및 배운 점</h2>
              <p>{project.content.result}</p>
            </section>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
              {project.links?.github && (
                <Link href={project.links.github} className="btn-secondary" target="_blank">
                  GitHub
                </Link>
              )}
              {project.links?.demo && (
                <Link href={project.links.demo} className="btn-primary" target="_blank">
                  배포 사이트
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}