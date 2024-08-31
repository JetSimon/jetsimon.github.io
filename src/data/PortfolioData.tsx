import PortfolioItemData from "../data_types/PortfolioitemData";

const portfolioData : PortfolioItemData[] = [
  {
    title: "aphorism.io",
    desc: "Made in 48 hours for LudumDare48 game jam. A party game ala JackBox/skribbl.io where users play in real time with friends. I avoided using a DB by just storing everything as an object on the node.js server (An interesting solution for sure! Really shows my ingenuity). Users create a room and share the link to see who can come up with the most hilarious - but thought provoking - aphorism. Won 25th most innovative game out of 1145 Compo entries.",
    tech: ["express", "node.js", "vue", "socket.io", "vanilla js"],
    image: "https://static.jam.vg/raw/cd2/c2/z/3b97f.png",
    source: "https://github.com/JetSimon/LD48",
    link: "http://aphorism.io/",
    learned: [
      "How to use web sockets. They are really fun and open up a lot of possibility!",
      "How to host on Heroku with GitHub",
      "Vue is amazing! This project is where my knowledge of vue really came in handy. It was really nice to organize elements into their components.",
      "Learning a new technology for a hackathon/game jam can be really fun!",
      "First impressions are everything. I tried to make sure my homepage made sense and was fairly reactive. I think this really paid off!",
    ],
  },
  {
    title: "EthJack",
    desc: "A proof of concept Ethereum friendly gambling tool. Lets the user specify a dealer address to hold money/send money to. User can also check their current wallet balance. For high rollers only! The gas prices are insane.",
    tech: ["vue", "MetaMask API", "tailwind css", "vanilla js"],
    image: "../img/ethjack.png",
    source: "https://github.com/JetSimon/Eth-Jack",
    link: "http://jetsimon.com/Eth-Jack/",
    learned: [
      "How to make a web app interact with cryptocurrency using MetaMask's in-browser-chrome-extension-wallet API",
      "How to use fetch requests to update the conversion rate of ETH -> CAD",
      "How to use Vue to have the site be reactive to states (gives installation instructions if user does not have MetaMask installed)",
      "Making something for your family is fun! I made this for my Dad on his birthday so we could play blackjack with our Ethereum. Only took ~4 hours for the base!",
    ],
  },
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
      "https://res.cloudinary.com/devpost/image/fetch/s--Ozl9ZKJb--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://cdn.discordapp.com/attachments/794419266052161566/797920267216093214/Screen_Shot_2021-01-10_at_12.10.12_PM.png",
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