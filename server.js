const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Is it working?');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

//POST URL ROUTE
app.post('/submit', (req, res) => {
    const data = req.body;
    res.send('Dados recebidos com sucesso!');
});