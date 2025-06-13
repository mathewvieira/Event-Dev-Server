import status from "http-status";
import UsuariosService from "../services/Usuarios.Service";

class UsuariosController {
  async index(_req, res) {
    res
      .status(200)
      .json({ status: res.statusCode, message: status[res.statusCode] });
  }
  async create(req, res, next) {
    try {
      const user = await UsuariosService.createUser(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }

  async getAll(_req, res, next) {
    try {
      const users = await UsuariosService.getUsers();
      res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  }

  async getById(req, res, next) {
    try {
      const user = await UsuariosService.getUserById(req.params.id);
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const updated = await UsuariosService.updateUser(req.params.id, req.body);
      if (!updated)
        return res.status(404).json({ message: "Usuário não encontrado" });
      res.json(updated);
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      const deleted = await UsuariosService.deleteUser(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Usuário não encontrado" });
      res.status(204).send(); //No content
    } catch (e) {
      next(e);
    }
  }
}

export default new UsuariosController();
