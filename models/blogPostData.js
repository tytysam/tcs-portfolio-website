const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  body1: { type: String, required: false },
  body2: { type: String, required: false },
  lorem: { type: String, required: false },
});

module.exports = mongoose.model("Post", blogPostSchema);

// const blogPostData = [
//   {
//     name: "Sample Blog Entry",
//     img: "/images/sample-blog-pic-earn-and-moz.jpg",
//     description:
//       "I may not be much of a writer, but I DID create these blog posts with some code I wrote.",
//     lorem:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
//   },
//   {
//     name: "Another Blog Entry",
//     img: "/images/sample-blog-pic-earn-2.jpg ",
//     description:
//       "I may not be much of a writer, but I DID create these blog posts with some code I wrote.",
//     lorem:
//       "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
//   },
//   {
//     name: "The One With a Blog Entry",
//     img: "/images/sample-blog-pic-earn-and-moz.jpg",
//     description:
//       "I may not be much of a writer, but I DID create these blog posts with some code I wrote.",
//     lorem:
//       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
//   },
// ];
