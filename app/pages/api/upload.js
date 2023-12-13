import multer from "multer";
const express = require("express");

const upload = multer({ dest: "/uploads/" });

export default upload.single("image");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/upload", upload.single("image"), (req, res) => {
  console.log("File:", req.file);
  console.log("Body:", req.body);

  res.json({ message: "File uploaded successfully" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
