function errorsHandlers(err, req, res, next) {
  res.status(500);
  console.log(err);
  return res.json({
    error: "errore gestno da  -errorsHandlers",
  });
}

module.exports = errorsHandlers;
