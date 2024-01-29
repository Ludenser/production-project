const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Путь к папке с ассетами
app.use('/assets', express.static(path.join(__dirname, '../src/shared/assets/backgrounds')));

app.listen(PORT, () => {
    console.log(`Assets server running at http://localhost:${PORT}`);
});
