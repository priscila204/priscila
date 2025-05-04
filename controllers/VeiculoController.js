

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






