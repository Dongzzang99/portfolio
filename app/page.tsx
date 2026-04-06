//HOME

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Image from "next/image"; //이미지 가져오기
import FlipText from "@/components/FlipText"; //자기소개 flip 애니메이션 import
import {
  FaReact,
  FaJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si"; // 기술 스택 아이콘 import

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* 🔹 소개 + 기술 스택 */}
        <section className="section">
          <div className="container">
            
            {/* 🔥 소개 카드 */}
            <div className="card" style={{ padding: 36 }}>
              <div className="hero-profile-card">
                
                {/* 프로필 이미지 */}
                <div className="hero-profile-image">
                  <Image
                    src="/profile.png"
                    alt="강동현 프로필"
                    width={200}
                    height={200}
                    style={{
                      borderRadius: "10%",
                      objectFit: "cover",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  />
                </div>

                {/* 텍스트 영역 */}
                <div>
                  <span className="badge">Frontend Developer Portfolio</span>

                  <h1 className="hero-title">
                    안녕하세요,
                    <br />
                    "<FlipText />" 강동현 입니다.
                  </h1>

                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
                        꿈을 이루는 열정과 긍정의 힘,
                      </h3>

                      <p
                        className="muted"
                        style={{ fontSize: 18, lineHeight: 1.9, marginTop: 8 }}
                      >
                       이 말을 바탕으로 어릴적부터 새로운 도전을 두려워 하지 않고
                        긍정적인 사고로 지내왔습니다.<br/>
                        HTML,CSS,JavaScript부터 시작해 React, TypeScript, Next.js, Tailwind CSS까지
                        기술 스택을 확장하며 프로젝트를 직접 구현해왔습니다.<br/>
                        지금에 안주하지 않고, 앞서 나가고 스스로 발전하기 위해 늘 노력하는 개발자가 되겠습니다.<br/>
                        감사합니다.
                      </p>

                  <div className="hero-actions">
                    <Link href="/projects" className="btn-primary">
                      프로젝트 보기
                    </Link>
                    <Link href="/about" className="btn-secondary">
                      자기소개 보기
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔥 기술 스택 (밑으로 이동된 부분) */}
            <div style={{ marginTop: 40 }}>
              <p className="section-kicker">보유 기술 스택</p>

              <div className="stack-list">
              <div className="stack-list">
                {[
                  { name: "React", icon: <FaReact /> },
                  { name: "TypeScript", icon: <SiTypescript /> },
                  { name: "Next.js", icon: <SiNextdotjs /> },
                  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                  { name: "JavaScript", icon: <FaJs /> },
                ].map((item) => (
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

        {/* 🔹 프로젝트 영역 */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">Selected Works</p>
                <h2 className="section-title">대표 프로젝트</h2>
              </div>

              <Link href="/projects" className="btn-secondary">
                전체 프로젝트 보기
              </Link>
            </div>

            <div className="project-grid">
              {projects.slice(0, 2).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}