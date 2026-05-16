import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const notionHref = project.links?.notion || "#";

  return (
    <article className="card" style={{ padding: 28 }}>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}
      >
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
        <a
          href={notionHref}
          className="btn-secondary"
          target={project.links?.notion ? "_blank" : undefined}
          rel={project.links?.notion ? "noreferrer" : undefined}
          aria-disabled={!project.links?.notion}
        >
          자세히 보기
        </a>
      </div>
    </article>
  );
}
