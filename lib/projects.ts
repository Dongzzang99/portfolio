export type Project = {
  title: string;
  description: string;
  tech: string[];
  role: string;
  type: string;
  links?: {
    notion?: string;
  };
};

//project 실제 데이터 object array
export const projects: Project[] = [
  {
    title: "MapleStory 강화 시뮬레이터🍁",
    description:
      "메이플스토리의 실제 강화 확률과 소모 재화를 바탕으로 만든 강화 시뮬레이션 웹 프로젝트입니다.",
    tech: ["React", "JavaScript", "Tailwind"],
    role: "프론트엔드 개발, 스타포스 기능 개발",
    type: "팀 프로젝트",
    links: {
      notion:
        "https://www.notion.so/MapleStory-1cf610e6330a80ef972dd475fcdfc00f?source=copy_link",
    },
  },
  {
    title: "IKEA Clone HomePage.ver1 - 프론트엔드🏠",
    description:
      "이케아 홈페이지 디자인을 참고하여 만든 이케아 클론 홈페이지 입니다.",
    tech: ["React", "JavaScript", "Tailwind"],
    role: "프론트엔드 개발",
    type: "개인 프로젝트",
    links: {
      notion:
        "https://www.notion.so/IKEA-2cb610e6330a8040b320e88f7d4273bb?source=copy_link",
    },
  },
  {
    title: "IKEA Clone HomePage.ver2 - 백엔드🏠",
    description: "이케아 클론 홈페이지에 백엔드 기능을 더한 Ver.2 입니다.",
    tech: ["React", "JavaScript", "Tailwind", "Spring Boot", "MySQL"],
    role: "프론트엔드 개발, 백엔드 개발",
    type: "개인 프로젝트",
    links: {
      notion:
        "https://www.notion.so/IKEA-ver-2-2ec610e6330a804ca4fadcf1bbe74675?source=copy_link",
    },
  },
  {
    title: "포트폴리오 사이트📃",
    description: "제 자기소개와 포트폴리오를 작성해놓은 사이트 입니다.",
    tech: ["React", "JavaScript", "Tailwind", "Next.JS", "TypeScript"],
    role: "프론트엔드 개발",
    type: "개인 프로젝트",
    links: {
      notion:
        "https://www.notion.so/2f0610e6330a809e93abd24f9099c31e?source=copy_link",
    },
  },
];
