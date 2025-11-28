function notFound(req, res, next) {
  res.status(404);
  return res.json({
    error: "Not Found",
    message: "Pagina non trovata",
  });
}

module.exports = notFound;
