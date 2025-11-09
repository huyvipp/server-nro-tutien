import fs from "fs";
import https from "https";
import Unrar from "node-unrar-js";

const url = "https://drive.usercontent.google.com/download?id=17a35EaZd54_kcviSkovsiWPizvMPLZV4&export=download";
const filePath = "./game.rar";

console.log("📥 Đang tải file game từ Google Drive...");

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error("❌ Lỗi tải file:", res.statusCode);
    return;
  }

  const fileStream = fs.createWriteStream(filePath);
  res.pipe(fileStream);

  fileStream.on("finish", () => {
    fileStream.close();
    console.log("✅ Tải xong! Đang giải nén...");

    const data = fs.readFileSync(filePath);
    const extractor = Unrar.createExtractorFromData({ data });

    const list = extractor.getFileList();
    console.log("📦 Danh sách file:", list.fileHeaders.map(f => f.name));

    const extracted = extractor.extractAll();
    for (const file of extracted.files) {
      if (file.extraction) {
        fs.mkdirSync("./extracted", { recursive: true });
        fs.writeFileSync(`./extracted/${file.fileHeader.name}`, file.extraction);
      }
    }

    console.log("✅ Giải nén hoàn tất! Tất cả file nằm trong thư mục /extracted");
  });
});
