import getPool from '../shared/utils/pool.Utils.js'

let prisma = getPool()

class ComunidadesRepository {
  async findMany() {
    try {
      return await prisma.comunidade.findMany()
    } catch (err) {
      return err
    } finally {
      await prisma.$disconnect()
    }
  }
}

export default new ComunidadesRepository()
