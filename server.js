import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Giữ app chạy
app.get("/", (req, res) => {
  res.send("✅ App đang hoạt động trên Railway!");
});

// Log để Railway biết process vẫn sống
setInterval(() => {
  console.log("💡 App vẫn đang hoạt động...");
}, 60000);

app.listen(port, () => {
  console.log(`🚀 App đang chạy ở cổng ${port}`);
});
