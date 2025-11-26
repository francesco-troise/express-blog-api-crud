//import dei dati
const array_posts = require("../data/posts");

//Le seguenti sono funizioni da esportare e richiamare nel router, per abbinare ad un percorso una determinata azione

//Index
function index(req, res) {
  return res.json(array_posts);
}

//Show
function show(req, res) {
  //La ricerca del singolo post avviene tramite parametro dinamico(in questo caso l'id)
  const post = array_posts.find((post) => post.id === parseInt(req.params.id));
  return res.json(post);
}

//Store
function store(req, res) {
  return res.send("Aggiunta effettuata!");
}

//Update
function update(req, res) {
  res.send("Modifica effettuata");
}

//Modify
function modify(req, res) {
  res.send("Modifica marginale effettuata");
}

//Destroy
function destroy(req, res) {
  //Ricerca dell'index relativo ad un DETERMINATO id
  const index = array_posts.findIndex(
    //Si controlla se "id" del post esaminato è uguale ad "id" inserito da utente
    (post) => post.id === parseInt(req.params.id)
  );
  //findIndex restituisce "-1" se nessun post supera la condizione{post.id === parseInt(req.params.id)}
  if (index === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  //Salvattagio del post rimosso(salvataggio non obbligatorio)
  const removed = array_posts.splice(index, 1);
  console.log("Post rimosso:", removed[0]);
  console.log("Array aggiornato:", array_posts);
  //".status" imposta uno status code appropriato per la risposta
  res.status(204).send();
}

//Export delle funzione da richiamare
module.exports = { index, show, store, update, modify, destroy };
