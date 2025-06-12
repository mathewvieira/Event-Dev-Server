import ComunidadesRepository from '../repositories/Comunidades.Repository.js'

class ComunidadesService {
  async showAll() {
    return await ComunidadesRepository.findMany()
  }
}

export default new ComunidadesService()
