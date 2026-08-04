const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Statik dosyaları (index.html, style.css, script.js) servis et
app.use(express.static(path.join(__dirname)));

// Kök adres için index.html gönder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Messi web app ${PORT} portunda çalışıyor`);
});
