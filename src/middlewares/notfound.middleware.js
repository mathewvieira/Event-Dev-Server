export default function notFoundMiddleware(req, res, _next) {
  res.status(404).json({
    error: 'Rota não encontrada!',
    method: req.method,
    path: req.path
  })
}
