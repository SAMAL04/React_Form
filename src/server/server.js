const express = require("express");
const cors = require("cors");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Use /submit for submitting the form");
});

app.post("/submit", upload.single("profilePic"), (req, res) => {
  if (req.file && req.body) {
    res.status(200).json({ success: "File Uploaded!" });
  }
  res.status(500).json({ error: "something went wrong" });
});

const server = app.listen(8000, () => {
  console.log("Server running in port - ", server.address().port);
});
