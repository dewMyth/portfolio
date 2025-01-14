import * as express from "express";
import * as path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT : ${PORT}`);
});
