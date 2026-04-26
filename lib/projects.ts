export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  images: string[];
  role: string;
  type: string;
  links?: {
    github?: string;
    demo?: string;
  };
  content: {
    overview: string;
    features: string[];
    trouble: string;
    solution: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    slug: "upgrade-simulator",
    images: ["/project/mapleProject/maple1.png"],
    title: "MapleStory 강화 시뮬레이터",
    description:
      "'메이플스토리' 실제 강화 확률을 바탕으로 개발한 강화 시뮬레이션 웹페이지 입니다.",
    tech: ["React", "JAVAScript", "Tailwind"],
    role: "프론트엔드 개발",
    type: "팀 프로젝트",
    links: {
      github: "https://github.com/your-repo",
      demo: "https://your-demo-url.com",
    },
    content: {
      overview:
        "'메이플스토리' 라는 RPG게임의 실제 강화 확률과 소모 강화 재화를 바탕으로 강화 시뮬레이션 웹 페이지를 개발 하였습니다. Google analytics 에 강화 결과 변수를 넣어 강화 결과 집계를 파악 할 수 있으며, 확률에 따라 잘 동작하는지 확인 할 수 있는 프로젝트 입니다.",
      features: [
        "강화 시뮬레이션 기능",
        "확률 기반 결과 계산",
        "강화 기록 저장 및 확인",
        "반응형 UI 제공",
      ],
      trouble:
        "여러 상태가 한 컴포넌트에 섞이면서 로직이 복잡해지고 유지보수가 어려워졌습니다.",
      solution:
        "상태를 역할별로 분리하고 컴포넌트 구조를 재정비해 가독성과 재사용성을 높였습니다.",
      result:
        "기능 확장이 쉬워졌고 UI 흐름도 더 직관적으로 개선할 수 있었습니다.",
    },
  },
  {
    slug: "portfolio-site",
    images: [],
    title: "개인 포트폴리오 사이트",
    description:
      "프로젝트 소개, 기술 스택, 회고를 정리할 수 있도록 설계한 개인 포트폴리오 웹사이트입니다.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    role: "기획 · 디자인 · 개발",
    type: "개인 프로젝트",
    links: {
      github: "https://github.com/your-repo",
      demo: "https://your-demo-url.com",
    },
    content: {
      overview:
        "단순 소개 페이지가 아니라 하나의 서비스처럼 보이도록 구성한 포트폴리오 사이트입니다. 프로젝트별 상세 설명과 기술 선택 이유를 명확하게 전달하는 데 집중했습니다.",
      features: [
        "프로젝트 목록 및 상세 페이지",
        "기술 스택 소개",
        "자기소개 및 연락처 구성",
        "반응형 레이아웃",
      ],
      trouble:
        "포트폴리오가 단순 나열식이 되면 강점이 잘 드러나지 않는 문제가 있었습니다.",
      solution:
        "프로젝트별 문제 해결 과정, 역할, 성과를 구조화해 읽는 사람이 핵심을 빠르게 파악할 수 있게 설계했습니다.",
      result:
        "단순 소개가 아니라 실제 프로젝트 경험과 사고 과정을 보여주는 형태로 정리할 수 있게 됐습니다.",
    },
  },
];
