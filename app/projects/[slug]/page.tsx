import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginBottom: 16,
              }}
            >
              {project.tech.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>

            <h1 className="section-title" style={{ marginBottom: 16 }}>
              {project.title}
            </h1>

            <p
              className="muted"
              style={{ lineHeight: 1.9, fontSize: 17, margin: 0 }}
            >
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
              <div className="muted">접속링크 ( 클릭시 이동합니다 )</div>
              <a href={project.links?.demo} target="_blank">
                  {project.links?.demo}
                </a>
                </div>
                
            </div>

            <section className="detail-section">
              <h2>프로젝트 소개</h2>
              <p>{project.content.overview}</p>
            </section>
            <section className="detail-section">
                <p style={{ color: "var(--foreground)", fontSize: "20px" }}>
                  {project.content.overview2}
                </p>
              </section>

              <section className="detail-section">
                  <h2>주요 기능</h2>

                  <div style={{ display: "grid", gap: 32 }}>
                    {project.content.features.map((feature, idx) => (
                      <div key={`${feature.title}-${idx}`} className="card" style={{ padding: 20 }}>
                        <h3 style={{ marginTop: 0, marginBottom: 12, fontSize: 20, fontWeight: 800 }}>
                          {feature.title}
                        </h3>

                        <div style={{ display: "grid", gap: 10, marginBottom: 18 }}>
                          {feature.descriptions.map((text, textIdx) => (
                            <p
                              key={`${feature.title}-desc-${textIdx}`}
                              className="muted"
                              style={{ lineHeight: 1.9, margin: 0 }}
                            >
                              {text}
                            </p>
                          ))}
                        </div>

                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            gap: 16,
                            marginBottom: 18,
                          }}
                        >
                          {feature.images.map((media, imageIdx) => (
                                <div key={`${feature.title}-media-${imageIdx}`} style={{ width: media.width ?? "100%" }}>
                                  {media.type === "image" ? (
                                    <Image
                                      src={media.src}
                                      alt={`${feature.title} 이미지 ${imageIdx + 1}`}
                                      width={1200}
                                      height={700}
                                      style={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: 16,
                                        border: "1px solid var(--border)",
                                        objectFit: "cover",
                                        display: "block",
                                        margin: "0 auto",
                                      }}
                                    />
                                  ) : (
                                    <div
                                      style={{
                                        position: "relative",
                                        width: "100%",
                                        aspectRatio: "16 / 9",
                                        borderRadius: 16,
                                        overflow: "hidden",
                                        border: "1px solid var(--border)",
                                      }}
                                    >
                                      <iframe
                                        src={media.src}
                                        title={`${feature.title} 영상 ${imageIdx + 1}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        style={{
                                          position: "absolute",
                                          inset: 0,
                                          width: "100%",
                                          height: "100%",
                                          border: 0,
                                        }}
                                      />
                                    </div>
                                  )}
                                </div>
                              ))}
                        </div>

                        <div style={{ display: "grid", gap: 10 }}>
                          {feature.descriptions2.map((text, textIdx) => (
                            <p
                              key={`${feature.title}-desc2-${textIdx}`}
                              className="muted"
                              style={{ lineHeight: 1.9, margin: 0 }}
                            >
                              {text}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 36,
              }}
            >
              {project.links?.github && (
                <Link
                  href={project.links.github}
                  className="btn-secondary"
                  target="_blank"
                >
                  GitHub
                </Link>
              )}
              {project.links?.demo && (
                <Link
                  href={project.links.demo}
                  className="btn-primary"
                  target="_blank"
                >
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
