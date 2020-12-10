const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  shortDesc: { type: String, required: true },
  longDesc: { type: String, required: true },
  synopsis: { type: String, required: false },
  link: { type: String, required: true },
  languages: { type: String, required: true },
});

const projectData = [
  {
    name: "The Boys: Supe-R Destruction",
    img: "https://i.imgur.com/87GIyS8.png",
    longDescription:
      "The Boys: Supe-r Destruction is an RPG-style game with classic Final-Fantasy turn-based combat straight out of the '90s —— based on the hit comic book series and television show: The Boys. Follow a team of 8bit-ish rag-tag vigilantes as they combat super-powered individuals who abuse their powers. Battle to the top of Vought Tower and expose the truth about Vought, The Seven, and Compound-V!",
    shortDescription:
      "Browser-based game written purely in JavaScript. Built just-for-fun, inspired by games of my childhood like Final Fantasy and Pokemon. ",
    breakdown: "",
    link: "https://github.com/tytysam/TheBoys_Supe-r_Destruction",
    languages: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    name: "This Portfolio",
    img: "",
    longDescription: "",
    shortDescription: "",
    breakdown: "",
    link: "#",
    languages: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Express.js",
      "Node.js",
      "MongoDB",
    ],
  },
];

module.exports = projectData;
module.exports = mongoose.model("Project", projectSchema);
