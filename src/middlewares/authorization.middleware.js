import { formatJson } from '../shared/utils/format.utils.js';

export function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.usuario || !req.usuario.funcao) {
      return res.status(403).json(formatJson(403, null, { message: 'Acesso negado. Usuário não autenticado ou sem função definida.' }));
    }

    if (!allowedRoles.includes(req.usuario.funcao)) {
      return res.status(403).json(formatJson(403, null, { message: 'Acesso negado. Você não tem permissão para realizar esta ação.' }));
    }

    next();
  };
}

// Exemplo de uso no controller ou rota:
// router.post('/admin-only', authMiddleware, authorizeRoles('admin'), adminController.createSomething);