// HOME

import Image from "next/image";
import Link from "next/link";
import { FaJava, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import FlipText from "@/components/FlipText";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const frontendStacks = [
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <FaJs /> },
];

const backendStacks = [
  { name: "Java 17", icon: <FaJava /> },
  { name: "Spring Boot 3.3.5", icon: <SiSpringboot /> },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="home-hero">
          <div className="container home-hero-layout">
            <aside className="hero-profile" aria-label="프로필 정보">
              <Image
                src={`${basePath}/profile.png`}
                alt="강동현 프로필"
                width={180}
                height={300}
                className="hero-profile-image"
                priority
              />

              <ul className="hero-profile-list">
                <li>이름 / 강동현</li>
                <li>생년월일 / 99.08.07</li>
                <li className="list-email">이메일 / kaka2172@naver.com</li>
                <li>연락처 / 010-4746-2172</li>
              </ul>
            </aside>

            <div className="home-copy">
              <h1 className="home-title">
                안녕하세요.
                <br />
                <span className="flip-line">
                  <FlipText /> 개발자 강동현입니다.
                </span>
              </h1>
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="container">
            <div className="about-me-copy">
              <h2 className="section-title">ABOUT ME!</h2>

              <div className="text-block">
                <p>
                  &quot;꿈을 이루는 열정과 긍정의 힘&quot; 이라는 가치관을 바탕으로 꾸준히
                  성장하고 있는 풀스택 개발자 강동현입니다. 사용자 입장에서
                  편안함을 생각하고, 개발자 입장에서 최적화를 고려하며, 열정과
                  긍정의 힘으로 성장해 나가는 개발자 입니다.
                </p>
                <Link href="/about" className="btn-secondary about-more-button">
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="container split-layout">
            <div className="section-label">
              <h2 className="section-title">SKILLS</h2>
            </div>

            <div className="skill-groups">
              <div className="skill-group">
                <h3>Frontend</h3>
                <div className="stack-list compact-stack">
                  {frontendStacks.map((item) => (
                    <span key={item.name} className="badge stack-item">
                      {item.icon}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-group">
                <h3>Backend</h3>
                <div className="stack-list compact-stack">
                  {backendStacks.map((item) => (
                    <span key={item.name} className="badge stack-item">
                      {item.icon}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="container">
            <div className="section-head">
              <div>
                <h2 className="section-title">PROJECTS</h2>
              </div>

              <Link href="/projects" className="btn-secondary">
                전체 프로젝트 보기
              </Link>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article key={project.title} className="project-row">
                  <div>
                    <p className="project-row-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  <div className="project-row-meta">
                    <span>{project.tech.join(" / ")}</span>
                    <a
                      href={project.links?.notion || "#"}
                      target={project.links?.notion ? "_blank" : undefined}
                      rel={project.links?.notion ? "noreferrer" : undefined}
                      aria-disabled={!project.links?.notion}
                    >
                      자세히 보기
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
