import getPool from '../shared/utils/pool.Utils.js'

class ComunidadesRepository {
  async findMany() {
    try {
      return await getPool().comunidade.findMany()
    } catch (err) {
      return err
    } finally {
      await prisma.$disconnect()
    }
  }
}

export default new ComunidadesRepository()
