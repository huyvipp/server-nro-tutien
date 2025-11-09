import fs from "fs";
import Unrar from "node-unrar-js";

// đọc file .rar vào bộ nhớ
const data = fs.readFileSync("./game.rar");

// khởi tạo trình giải nén
const extractor = Unrar.createExtractorFromData({ data });
const list = extractor.getFileList();
console.log("📦 File list:", list.fileHeaders.map(f => f.name));

// giải nén tất cả
const extracted = extractor.extractAll();
for (const file of extracted.files) {
  if (file.extraction) {
    fs.writeFileSync(file.fileHeader.name, file.extraction);
  }
}
console.log("✅ Giải nén xong!");
