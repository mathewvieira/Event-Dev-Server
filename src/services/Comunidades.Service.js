import ComunidadesRepository from '../repositories/Comunidades.Repository.js'

class ComunidadesService {
  async showAll() {
    return await ComunidadesRepository.findMany()
  }

  async getComunidadeById(id) {
    return prisma.comunidade.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async createComunidade(data) {
    const newData = { ...data, atualizado_em: new Date() }
    return prisma.comunidade.create({
      data: newData,
    });
  }

  async updateComunidade(id, data) {
    const updatedData = { ...data, atualizado_em: new Date() };
    return prisma.comunidade.update({
      where: {id: parseInt(id)}, 
      data: updatedData,
    });
  }

  async deleteComunidade(id) {
    return prisma.cominidade.delete ({
      where: { id: parseInd(id)},
    });
  }
}

export default new ComunidadesService()
