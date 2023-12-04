import express from "express";
import path from "path";
import { calculateBMR } from "./tdee.js";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "public")));

app.post(
  "/calculateBMR",
  express.urlencoded({ extended: true }),
  (req, res) => {
    const { gender, age, height, weight } = req.body;
    const calculatedBMR = calculateBMR(gender, age, height, weight);
    let img = "gif1.gif";
    let result = "Normal";
    if (calculatedBMR > 200 && calculatedBMR < 1000) {
      img = "gif3.gif";
      result = "Fit";
    } else if (calculatedBMR > 1000) {
      img = "gif2.gif";
      result = "Obese";
    }
    res.json({
      value: calculatedBMR,
      img,
      result,
    });
  }
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
