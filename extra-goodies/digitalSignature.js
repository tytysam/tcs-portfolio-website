let msg = "%c 🦖 hand coded with love by tyler c samuelson ✌🏼";

let styles = [
  "font-size: 16px",
  "font-family: montserrat",
  "background: #fdfbf5",
  "display: inline-block",
  "color: black",
  "padding: 8px 19px",
  "border: 1px dashed #202020;",
].join(";");

// Inline <script> body, so the signature logs in the visitor's browser console.
const digitalSignatureScript = `console.log(${JSON.stringify(msg)}, ${JSON.stringify(styles)});`;

module.exports = digitalSignatureScript;
