const csv = require("csvtojson");
const fs = require("fs");
const path = require("path");

const writeText = fs.createWriteStream(
  path.resolve(__dirname, "./files/text/text.txt")
);
fs.createReadStream(path.resolve(__dirname, "./files/csv/file.csv"), {
  highWaterMark: 32,
})
  .pipe(csv())
  .on("data", function (data) {
    writeText.write(data);
  })
  .on("error", console.log);
