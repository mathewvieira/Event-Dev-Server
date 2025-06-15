export default function errorMiddleware(error, _req, res, _next) {
  console.error(error)
  res.sendStatus(500)
}
