import PortfolioItemData from "../data_types/PortfolioItemData";

const portfolioData : PortfolioItemData[] = [
  {
    title: "Goshzilla Is In Love",
    desc: "A short, cute, and monsterous dating sim about being a two kaiju in love.",
    tech: ["Unity", "FLStudio", "Blender"],
    image: "https://img.itch.zone/aW1hZ2UvMTE3NDAyOC82ODM2MTc3LmdpZg==/347x500/kWgr2T.gif",
    source: "https://simonjet.itch.io/goshzilla-is-in-love",
    link: "https://simonjet.itch.io/goshzilla-is-in-love",
    learned: [
      "I learn to perfect my 3D aesthetic with this game. I am very proud of how it looks visually.",
      "How to create a node based dialogue system in Unity",
      "I learned quite a bit about working with the 3D Unity pipeline. I was familiar before but the intensive nature of a game jam really honed me in.",
    ],
    blurb: "Kaiju Dating Game"
  },
  {
    title: "7 Second Haircuts",
    desc: "Browser based game made for What-A-Jam May 2021 game jam. Was quite successful on itch.io with 4000+ plays and at one point being the 12th most popular web game on the site. Earned a review on the site Free Game Planet",
    tech: ["Unity", "FLStudio", "Aseprite"],
    image: "https://img.itch.zone/aW1hZ2UvMTAzODAyNS81OTI3MjY3LmdpZg==/original/sheyxh.gif",
    source: "https://simonjet.itch.io/7-second-haircuts",
    link: "https://simonjet.itch.io/7-second-haircuts",
    learned: [
      "Simple game mechanics with good polish and feel create a great player experience!",
      "Implementing the haircut judging system was pretty interesting to fine tune. Had to weight certain variables more than others (for example a lack of hair where a customer wants hair is judged more harshly than leaving a chunk of hair)",
      "Built in tutorials are the best way to teach a player. They will not want to read your descriptoin to find out how to play!",
      "It was very useful to pick the somewhat messy and cartoonish art style. It made producing assets fast and fun!",
    ],
    blurb: "Cut Hair Fast"
  },
  {
    title: "Tavern",
    desc: "A gameified RPG style coding challenge site made in 24 hours for the nwHacks 2021 hackathon with some friends. Very cool experience working with a team to bring a product to life in such a short time. I mainly worked on the avatar creation system. Lots of SVGs! Won honorable mention.",
    tech: ["redwood js", "react", "tailwind css", "magic auth", "vanilla js"],
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/331/233/datas/original.png",
    source: "https://github.com/amorriscode/tavern",
    link: "https://devpost.com/software/tavern-2764g3",
    learned: [
      "How to break up work in a four person team, communicate, and complete a project in 24 hours",
      "How to use redwood js to quickly and easily create a basic CRUD app",
      "How finicky SVGs will be if you disrespect them (too many hours lost)",
      "A little last minute work on a homepage goes a longway. We were working with almost no homepage until the last hour of the project and it added a lot!",
      "Sometimes the easiest solution actually is the best one.",
    ],
    blurb: "Leetcode + RPG"
  },
  {
    title: "Jet's Code 1 Tool",
    desc: "A modding tool for browser based election game 'The Campaign Trail' that allows users to create mods visually without having to know how to edit json.",
    tech: ["js", "react", "css"],
    image: "https://jetsimon.com/img/code1.png",
    source: "https://github.com/JetSimon/jets-code-one-tool",
    link: "https://jetsimon.com/jets-code-one-tool/",
    learned: [
      "How to read files in react",
      "How to manipulate json data with react and then give it back to the user",
    ],
    blurb: "Modding Tool"
  },
  {
    title: "Jet's Code 2 Tool",
    desc: "A modding tool for browser based election game 'The Campaign Trail' that allows users to create mods visually without having to know how to edit json.",
    tech: ["js", "vue", "css"],
    image: "https://jetsimon.com/img/code2.png",
    source: "https://github.com/JetSimon/Jets-The-Campaign-Trail-Mod-Tool-Website",
    link: "https://jetsimon.com/Jets-The-Campaign-Trail-Mod-Tool-Website/",
    learned: [
      "How to read files in vue",
      "How to manipulate json data with vue and then give it back to the user",
    ],
    blurb: "Another Modding Tool"
  },
  {
    title: "OSEG",
    desc: "Open Source Election Game: A fully fledged rewrite/clone of The Campaign Trail made from scratch to accomodate new features for players. Also includes a fully fledged scenario editor toolkit that allows players to make scenarios with no code!",
    tech: ["react", "typescript"],
    image: "https://jetsimon.com/img/oseg.png",
    source: "https://github.com/JetSimon/open-source-election-game/",
    link: "https://jetsimon.com/open-source-election-game/",
    learned: [
      "How to read files in vue",
      "How to manipulate json data with vue and then give it back to the user",
    ],
    blurb: "Election Game Engine"
  },
  {
    title: "The Community Trail",
    desc: "A website that uses OSEG (my election game engine) to host a multitude of user made election scenarios. Includes user accounts, reviews, leaderboards, and achievements!",
    tech: ["react", "typescript", "firebase", "firestore"],
    image: "https://jetsimon.com/img/community.png",
    source: "",
    link: "https://thecommunitytrail.com/",
    learned: [
      "How to create a whole fullstack site using Firebase and Firestore",
      "How to write a robust and scalable database structure and handle all the pitfalls that comes with databases!",
    ],
    blurb: "Election Game Website"
  },
  {
    title: "Subanagrams",
    desc: "A word game inspired by the daily NYT games like Wordle and Spelling Bee",
    tech: ["react", "javascript"],
    image: "https://jetsimon.com/img/subanagrams.png",
    source: "https://github.com/JetSimon/subanagrams",
    link: "https://jetsimon.com/subanagrams/",
    learned: [
      "I wrote an algorithm to find every possible contiguous subset anagram (or subanagram) in a word",
      "People played it and it was fun!",
      "The puzzles are automatically generated every day based on random seeds. This is good and bad."
    ],
    blurb: "Word Game"
  },
  {
    title: "VidGen",
    desc: "A small GUI application that allows the user to generate videos with OpenAI and stock footage libraries in seconds. This was WAY before Runway or other services were offering this! (Well, maybe around the same time or a few months before. But I hadn't heard of 'em).",
    tech: ["python", "openai", "bert", "moviepy"],
    image: "https://jetsimon.com/img/vidgen.png",
    source: "https://github.com/JetSimon/vidgen",
    link: "https://github.com/JetSimon/vidgen",
    learned: [
      "I learned how to use OpenAI API to generated video scripts",
      "I learned how to use BERT to get the most important words from sentences",
      "I learned how to use a bunch of stock footage and image APIs to search for those words",
      "I learned how to use MoviePY to edit videos with code"
    ],
    blurb: "AI Video Slop"
  },
  {
    title: "Emotree",
    desc: "A tiny program that takes a video feed, runs each pixel through a descision tree to match it to an emoji, and results in a live realtime video feed of emojis that resemble the original footage!",
    tech: ["python", "data science"],
    image: "https://jetsimon.com/img/emotree.png",
    source: "https://github.com/JetSimon/emotree",
    link: "https://github.com/JetSimon/emotree",
    learned: [
      "I learned how to manipulate the webcam feed using OpenCV and make cool effects"
    ],
    blurb: "Emojify Videos"
  },
  {
    title: "Ngân Puzzle Solver",
    desc: "A small webapp I made for my partner so she could skip doing challenging tile puzzles in the games she plays.",
    tech: ["react", "javascript"],
    image: "https://jetsimon.com/img/puzzlesolver.png",
    source: "https://github.com/JetSimon/ngan-puzzle-solver",
    link: "https://github.com/JetSimon/ngan-puzzle-solver",
    learned: [
      "I learned how to use flood fill to detect which tile shapes the player has painted into the grid",
      "I learned how to use dynamic programming to arrive at a solution to the hard problem of trying to fit tiles perfectly into a grid"
    ],
    blurb: "Tile Puzzle Solver"
  },
  {
    title: "Browser 3D Renderer",
    desc: "A small, unoptimized 3D renderer that runs entirely on the CPU. Read OBJ files and render them in (kind of) real time!",
    tech: ["html", "css", "javascript", "3d graphics"],
    image: "https://jetsimon.com/img/renderer.png",
    source: "https://github.com/JetSimon/canvas-3d-renderer",
    link: "https://jetsimon.com/canvas-3d-renderer/",
    learned: [
      "I learned how to apply the concepts I learned at school from memory and write a 3D renderer!",
      "It turned out to be super slow to run on the CPU and in a browser, but it was super fun."
    ],
    blurb: "My .obj Viewer"
  },
];

export default portfolioData;