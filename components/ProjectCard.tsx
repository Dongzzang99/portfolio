//UI부품_Card
import Link from "next/link";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="card" style={{ padding: 28 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {project.tech.map((item) => (
          <span key={item} className="badge">
            {item}
          </span>
        ))}
      </div>

      <h3 className="project-card-title">{project.title}</h3>

      <p className="project-card-desc">{project.description}</p>

      <div className="info-list">
        <div>역할: {project.role}</div>
        <div>구분: {project.type}</div>
        <div>기간: {project.period}</div>
      </div>

      <div style={{ marginTop: 24 }}>
        <Link href={`/projects/${project.slug}`} className="btn-secondary">
          프로젝트 상세 보기
        </Link>
      </div>
    </article>
  );
}