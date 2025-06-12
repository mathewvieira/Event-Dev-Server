export default function stampMiddleware(_req, res, next) {
  res.setHeader('X-Event-Dev', '~made for communities~')
  next()
}
