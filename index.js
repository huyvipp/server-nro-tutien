const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('NodeJS server is running 🚀');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Giữ tiến trình không tắt
setInterval(() => {
  console.log("App still running...");
}, 10000);
