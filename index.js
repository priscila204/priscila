
const express = require('express');
const exphbs = require('express-handlebars');


const app = express();
app.use(express.urlencoded({ extended: true }));

// Configura Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));


// Rotas
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contatos', (req, res) => {
    res.render('contatos');
});
app.get('/VeiculosCadastro', (req, res) => {
    res.render('formVeiculos');
});
app.get('/BuscarVeiculos', (req, res) => {
    res.render('buscarVeiculos');
});


app.get('/usuarios', (req, res) => {
    res.render('usuarios');
});
const veiculoRoutes = require("./routes/veiculoRoute");
app.use("/veiculos", veiculoRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


