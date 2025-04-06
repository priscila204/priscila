const express = require ('express');
const app = express();
app.use(express.urlencoded({ extends: true }));

app.get("/", (req, res) =>{
res.send("ola mundo?");
});

const veiculoRoute = require("./routes/veiculoRoute")
app. use("/veiculoRoute", veiculoRoute);

app.listen(8000, (err) => {
    if (err) {
        console.log("Erro: " + JSON.stringify(err));
    }else{
        console.log(`Servidor rodando na porta http://localhost:${8000}`);
    }
})