import PortfolioItemData from "../data_types/PortfolioitemData";

const portfolioData : PortfolioItemData[] = [
  {
    title: "Goshzilla Is In Love",
    desc: "A short, cute, and monsterous dating sim about being a two kaiju in love.",
    tech: ["Unity", "FLStudio", "Blender"],
    image:
      "https://img.itch.zone/aW1hZ2UvMTE3NDAyOC82ODM2MTc3LmdpZg==/347x500/kWgr2T.gif",
    source: "https://simonjet.itch.io/goshzilla-is-in-love",
    link: "https://simonjet.itch.io/goshzilla-is-in-love",
    learned: [
      "I learn to perfect my 3D aesthetic with this game. I am very proud of how it looks visually.",
      "How to create a node based dialogue system in Unity",
      "I learned quite a bit about working with the 3D Unity pipeline. I was familiar before but the intensive nature of a game jam really honed me in.",
    ],
  },
  {
    title: "7 Second Haircuts",
    desc: "Browser based game made for What-A-Jam May 2021 game jam. Was quite successful on itch.io with 4000+ plays and at one point being the 12th most popular web game on the site. Earned a review on the site Free Game Planet",
    tech: ["Unity", "FLStudio", "Aseprite"],
    image:
      "https://img.itch.zone/aW1hZ2UvMTAzODAyNS81OTI3MjY3LmdpZg==/original/sheyxh.gif",
    source: "https://simonjet.itch.io/7-second-haircuts",
    link: "https://simonjet.itch.io/7-second-haircuts",
    learned: [
      "Simple game mechanics with good polish and feel create a great player experience!",
      "Implementing the haircut judging system was pretty interesting to fine tune. Had to weight certain variables more than others (for example a lack of hair where a customer wants hair is judged more harshly than leaving a chunk of hair)",
      "Built in tutorials are the best way to teach a player. They will not want to read your descriptoin to find out how to play!",
      "It was very useful to pick the somewhat messy and cartoonish art style. It made producing assets fast and fun!",
    ],
  },
  {
    title: "Tavern",
    desc: "A gameified RPG style coding challenge site made in 24 hours for the nwHacks 2021 hackathon with some friends. Very cool experience working with a team to bring a product to life in such a short time. I mainly worked on the avatar creation system. Lots of SVGs! Won honorable mention.",
    tech: ["redwood js", "react", "tailwind css", "magic auth", "vanilla js"],
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/331/233/datas/original.png",
    source: "https://github.com/amorriscode/tavern",
    link: "https://devpost.com/software/tavern-2764g3",
    learned: [
      "How to break up work in a four person team, communicate, and complete a project in 24 hours",
      "How to use redwood js to quickly and easily create a basic CRUD app",
      "How finicky SVGs will be if you disrespect them (too many hours lost)",
      "A little last minute work on a homepage goes a longway. We were working with almost no homepage until the last hour of the project and it added a lot!",
      "Sometimes the easiest solution actually is the best one.",
    ],
  },
];

export default portfolioData;