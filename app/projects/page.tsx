//projects
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="section">
        <div className="container">
          <div style={{ marginBottom: 28 }}>
            <p className="section-kicker">Projects</p>
            <h1 className="section-title">프로젝트 모음</h1>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}