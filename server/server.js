const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (_, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(port, () => console.log('Resume is running on port 3000.'));