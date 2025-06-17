export default function errorMiddleware(_error, _req, res, _next) {
  res.sendStatus(500)
}
