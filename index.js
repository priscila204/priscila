
const express = require('express');


const app = express();
app.use(express.urlencoded({ extended: true }));




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


