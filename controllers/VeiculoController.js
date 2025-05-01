const express = require("express");
const app = express();

const exphbs = require("express-handlebars");

// Configuração do Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Middleware para receber dados do form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importando rotas
const veiculoRoutes = require("./routes/veiculoRoutes");
app.use("/veiculos", veiculoRoutes);

// Rota inicial
app.get("/", (req, res) => {
    res.render("home"); // Renderiza views/home.handlebars
});

// Iniciando o servidor
app.listen(8000, () => {
    console.log("Servidor rodando em http://localhost:8000");
});

const path = require("path");

class VeiculoController {
  static formCadastro(req, res) {
    res.render("formVeiculo"); // Agora usando Handlebars
  }

  static cadastrar(req, res) {
    // Lógica de cadastro com Prisma (depois)
    res.send("Veículo cadastrado!");
  }

  static buscarTodos(req, res) {
    // Lógica de listar todos os veículos (depois)
    res.send("Lista de veículos");
  }
}


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class VeiculosController {
  // Método para criar um novo veículo
  static async criar(req, res) {
    try {
      const { placa, modelo, ano } = req.body;
      const veiculo = await prisma.veiculo.create({
        data: {
          placa,
          modelo,
          ano: parseInt(ano),
        },
      });
      res.status(201).json(veiculo);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao criar veículo', detalhes: error.message });
    }
  }

  // Método para buscar todos os veículos
  static async buscartodos(req, res) {
    try {
      const veiculos = await prisma.veiculo.findMany();
      res.status(200).json(veiculos);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar veículos', detalhes: error.message });
    }
  }
}

module.exports = VeiculosController;



static asyn cadastrar(req,res) {
const veiciculo =await prisma .veiculo
}


