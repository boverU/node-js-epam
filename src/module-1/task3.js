import csv from "csvtojson";
import fs from "fs";
import path from "path";

const writeText = fs.createWriteStream(
  path.resolve(__dirname, "./files/text/text.txt")
);
fs.createReadStream(path.resolve(__dirname, "./files/csv/file.csv"))
  .pipe(csv())
  .on("data", (data) => writeText.write(data))
  .on("error", console.log);
