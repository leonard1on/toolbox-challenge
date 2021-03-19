const express = require("express");
const cors = require("cors");
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/iecho", (req, res) => {
  const { text } = req.query;
  if (!text) {
    res.status(400).json({ error: "no text" });
  } else {
    const reverse = text.split("").reverse().join("");
    const palindrome =
      reverse.split(" ").join("").toLowerCase() ===
      text.split(" ").join("").toLowerCase();
    res.status(200).json({ text: reverse, palindrome });
  }
});

app.listen(PORT, () => {
  console.log("Server starting on PORT:", PORT);
});
