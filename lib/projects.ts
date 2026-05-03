export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  type: string;
  period: string;
  images?: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  content: {
    overview: string;
    overview2: string;
    features: {
      title: string; // 소제목
      descriptions: string[];   // 이미지 위 글
      images: {
        type: "image" | "youtube"; //이미지칸에 유튜브 type 도 삽입 해서 이미지 뿐만 아니라 유튜브도 넣을 수 있게끔 (iframe 타입을 넣기 위함)
        src: string;
        width?: string;
      }[];         // 이미지 width로 % 주면 style 태그로 값 이동
      descriptions2: string[];  // 이미지 밑 글 및 2
    }[];
    trouble: string;
    solution: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    slug: "upgrade-simulator",
    title: "MapleStory 강화 시뮬레이터🍁",
    description:
      "'메이플스토리' 라는 게임의 실제 강화 확률을 바탕으로 개발한 강화 시뮬레이션 웹페이지 입니다.",
    tech: ["React", "JavaScript", "Tailwind"],
    role: "프론트엔드 개발, '스타포스' 부분 개발",
    type: "팀 프로젝트",
    period: "2025.00 - 2025.00",
    links: {
      github: "https://github.com/your-repo",
      demo: "https://your-demo-url.com",
    },
    content: {
      overview:
        "'메이플스토리' 라는 RPG게임의 실제 강화 확률과 소모 강화 재화를 바탕으로 강화 시뮬레이션 웹 페이지를 개발 하였습니다. Google Analytics에 강화 결과 변수를 넣어 강화 결과 집계를 파악할 수 있으며, 확률에 따라 잘 동작하는지 확인할 수 있는 프로젝트 입니다.",
        overview2:
        "사용자는 장비의 착용 레벨, 스타포스 단계, 스타캐치 (확률 상승), 파괴방지, 이벤트 옵션(파괴 확률 감소, 재화 할인)등을 설정하여 강화 시뮬레이션을 실행할 수 있으며, 성공/실패/파괴 확률과 재화 비용을 실시간으로 확인 할 수 있습니다.",
        features: [
          {
            title: "스타포스 시뮬레이션 메인화면",
            descriptions: [
              "강화 실행 영역과 결과 출력 영역을 각각 컴포넌트로 분리하여 화면에 나란히 배치했습니다.",
              
              "강화 결과와 소모 재화를 실시간으로 확인할 수 있도록 구성하였고 각각의 컴포넌트에 초기화 버튼을 두어 사용된 재화를 초기화 하거나, 강화 결과 창을 초기화 할 수 있게 끔 구성하였습니다.",
            ],
            images: [ //string, width/ object 가 들어있기 때문에 {} 확인하고 사용
              {
                type: "image",
                src: "/project/mapleProject/maple1.png",
              },
            ],
            descriptions2: [
              "이를 통해 사용자는 강화 전 설정값과 강화 후 결과를 한 화면에서 자연스럽게 비교할 수 있습니다.",
              "또한 컴포넌트 책임을 분리하여 이후 기능 수정이나 확장이 쉬운 구조로 개선했습니다.",
            ],
          },
          {
            title: "스타포스 시뮬레이션 메인화면1",
            descriptions: [
              "사용자가 장비 레벨, 강화 단계, 이벤트 옵션(확률상승, 파괴방지, 재화할인 등) 등을 직접 설정할 수 있도록 구현했습니다.",
              "강화 단계가 유지 되게끔 원하는 유저를 위하여 강화가 성공하거나 파괴되더라도 강화단계가 유지되는 옵션을 구현했습니다.",
              "실제 게임 내에서 하는 강화 이벤트를 구현하였습니다. 버튼을 누르면 실시간을 파괴확률, 필요 재화 등이 수정됩니다.",
            ],
            images: [ //string, width/ object 가 들어있기 때문에 {} 확인하고 사용
              {
                type: "image",
                src: "/project/mapleProject/maple2.png",
                width: "50%",
              },
            ],
            descriptions2: [
   
            ],
          },
          {
            title: "스타포스 시뮬레이션 메인화면1",
            descriptions: [
              "사용자가 장비 레벨, 강화 단계, 이벤트 옵션(확률상승, 파괴방지, 재화할인 등) 등을 직접 설정할 수 있도록 구현했습니다.",
              "강화 단계가 유지 되게끔 원하는 유저를 위하여 강화가 성공하거나 파괴되더라도 강화단계가 유지되는 옵션을 구현했습니다.",
              "실제 게임 내에서 하는 강화 이벤트를 구현하였습니다. 버튼을 누르면 실시간을 파괴확률, 필요 재화 등이 수정됩니다.",
            ],
            images: [ //string, width/ object 가 들어있기 때문에 {} 확인하고 사용
              {
                type: "youtube",
                src: "https://www.youtube.com/embed/ilborVky7PM?si=YmgRfTMmP_aZsSTO", // 유튜브 링크 삽입
              },
            ],
            descriptions2: [
   
            ],
          },
        ],
      trouble:
        "여러 상태가 한 컴포넌트에 섞이면서 로직이 복잡해지고 유지보수가 어려워졌습니다.",
      solution:
        "상태를 역할별로 분리하고 컴포넌트 구조를 재정비해 가독성과 재사용성을 높였습니다.",
      result:
        "기능 확장이 쉬워졌고 UI 흐름도 더 직관적으로 개선할 수 있었습니다.",
    },
  },

];