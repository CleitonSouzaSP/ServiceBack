const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3333;

app.use(bodyParser.json());

app.get('/login', (req, res) => {
    const body = req.body;
    res.send('Usuário não encontrado!');

})


app.listen(port, () => console.log('Running on port: ' + port));

