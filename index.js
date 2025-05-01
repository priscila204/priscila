
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Configura Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Rotas
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contatos', (req, res) => {
    res.render('contatos');
});

app.get('/usuarios', (req, res) => {
    res.render('usuarios');
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


