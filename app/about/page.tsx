//about
import Navbar from "@/components/Navbar";
import Image from "next/image"; //이미지 가져오기
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function AboutPage() {
  return (
    <>
    <Navbar />
  
    <main className="section">
      <div className="container">
        <div className="card" style={{ padding: 36, maxWidth: 900 }}>
          
          <p className="section-kicker">About Me!</p>
          <h1 className="section-title">저를 소개합니다</h1>
  
          <div style={{ marginTop: 32 }}>
  
            {/* 🔥 상단 프로필 + 핵심 가치 */}
            <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
              
              <Image
                src={`${basePath}/photo1.jpg`}
                alt="강동현 프로필"
                width={230}
                height={230}
                style={{
                  borderRadius: "12px",
                  objectFit: "cover",
                  border: "1px solid var(--border)",
                }}
              />
              <Image
                src={`${basePath}/photo2.jpg`}
                alt="강동현 프로필"
                width={230}
                height={230}
                style={{
                  borderRadius: "12px",
                  objectFit: "cover",
                  border: "1px solid var(--border)",
                }}
              />

  
              <div>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>
                  꿈을 이루는 열정과 긍정의 힘
                </h3>
  
                <p
                  className="muted"
                  style={{ fontSize: 17, lineHeight: 1.8, marginTop: 10 }}
                >
                  단순한 문장이 아닌, 제 삶의 방향을 이끄는 핵심 가치입니다.  
                  어려운 상황에서도 포기하기보다 해결 방법을 고민하며,
                  꾸준히 성장해 나가고자 합니다.
                </p>
              </div>
            </div>
  
            {/* 🔥 자기소개 */}
            <div style={{ marginTop: 36 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>자기소개</h3>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                안녕하세요. “꿈을 이루는 열정과 긍정의 힘”이라는 가치관을 바탕으로
                꾸준히 성장하고 있는 프론트엔드 개발자 강동현입니다.
              </p>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                새로운 환경이나 어려운 문제에 직면했을 때 피하거나 포기하기보다,
                긍정적인 태도로 해결책을 모색하며 작은 경험을 차근차근 쌓아
                한 단계씩 성장해 나가는 것을 중요하게 생각합니다.
              </p>
            </div>
  
            {/* 🔥 개발 방향 */}
            <div style={{ marginTop: 36 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>개발 방향</h3>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                저는 “사용자가 쉽게 이해하고 끝까지 편하게 사용할 수 있는 웹 서비스”를
                만드는 것을 핵심 가치로 삼고 있습니다.
              </p>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                React와 JavaScript 기반의 프로젝트를 진행하며,
                실제 서비스 구조를 참고해 페이지 흐름, 상태 관리,
                컴포넌트 재사용성을 고려한 구조로 개발해왔습니다.
              </p>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                또한 새로운 기술 학습과 리팩토링을 반복하며
                프로젝트를 점진적으로 개선해 나가고 있습니다.
              </p>
            </div>
  
            {/* 🔥 기술 성장 및 경험 */}
            <div style={{ marginTop: 36 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>기술 성장 경험</h3>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                대학 시절 C++ 기반 Unity 엔진을 활용한 게임 개발 프로젝트를 통해
                프로그래밍 기초와 협업 경험을 쌓았습니다.
              </p>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                이후 JavaScript를 시작으로 React, TypeScript, Tailwind CSS까지
                기술 스택을 확장하며 웹 개발 역량을 강화했습니다.
              </p>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                강화 시뮬레이션 팀 프로젝트를 통해 실제 사용자 서비스를 운영하고,
                Google Analytics를 활용해 사용자 경험을 분석하고 개선한 경험이 있습니다.
              </p>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                또한 IKEA 클론 프로젝트에서는 구조 개선과 리팩토링을 통해
                유지보수성과 확장성을 높였으며,
                TypeScript를 도입해 코드 안정성과 가독성을 향상시켰습니다.
              </p>
            </div>
  
            {/* 🔥 문제 해결 경험 */}
            <div style={{ marginTop: 36 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>문제 해결 경험</h3>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                프로젝트를 진행하며 기술적인 문제뿐 아니라 팀 내 소통과 협업을 통해
                문제를 해결하는 과정을 중요하게 생각합니다.
              </p>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                팀장과 팀원 역할을 모두 경험하며 의견 충돌 상황에서도
                사용자 관점을 기준으로 소통하며 최적의 방향을 도출해왔습니다.
              </p>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                또한 기능 구현 과정에서 발생한 문제를 단순히 해결하는 데 그치지 않고,
                구조를 개선하고 재발을 방지하는 방향으로 접근해왔습니다.
              </p>
            </div>
  
            {/* 🔥 성장 방식 */}
            <div style={{ marginTop: 36 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>성장 방식</h3>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                저는 스스로 부족함을 인식하는 것에서 성장이 시작된다고 생각합니다.
              </p>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                이해가 부족한 부분은 공식 문서와 자료를 통해 개념을 정리하고,
                직접 구현해보며 지식을 체득해왔습니다.
              </p>
  
              <p className="muted" style={{ lineHeight: 1.9 }}>
                앞으로도 현재에 안주하지 않고 꾸준한 학습과 개선을 반복하며
                지속적으로 성장하는 개발자가 되고자 합니다.
              </p>
            </div>
  
          </div>
        </div>
      </div>
    </main>
  </>
  );
}