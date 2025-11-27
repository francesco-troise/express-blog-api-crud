//Import di express
const express = require("express");

//Salvataggio in App dell'oggetto messo a dsposizoine dalla funzione express()
const app = express();

//Definizione della porta locale su cui girarerà il server
const PORT = 3000;

//Parsing globale dei dati in ingresso
app.use(express.json());

//Import del router
const posts_router = require("./routers/posts_router");

//Definizione della rotta radice
app.get("/", (req, res) => {
  res.send("HEllo HEll");
});

//Prefisso di riferimo per tutte le rotte del router specifico, in questo caso : posts_router
app.use("/posts", posts_router);

//Mantenimento live del server locale
app.listen(PORT, () => {
  console.log(`Server working on port: ${PORT}`);
});
