//import dei dati
const posts = require("../data/posts");
const array_posts = require("../data/posts");

//Le seguenti sono funizioni da esportare e richiamare nel router, per abbinare ad un percorso una determinata azione

//Index
function index(req, res) {
  if (req.query.tag) {
    const not_found = false;
    const { tag } = req.query;
    const posts_filtered = array_posts.filter((post) => {
      return post.tags.includes(tag);
    });

    if (posts_filtered.length === 0) {
      return res.status(404).json({ messaggio: "Nessun tag corrispondente" });
    }

    return res.json(posts_filtered);
  }
  return res.json(array_posts);
}

//Show
function show(req, res) {
  //La ricerca del singolo post avviene tramite parametro dinamico(in questo caso l'id)
  const post = array_posts.find((post) => post.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ errore: "post non trovato" });
  }
  return res.json(post);
}

//Store
function store(req, res) {
  const newPost = {
    ...req.body,
    id: array_posts[array_posts.length - 1].id + 1,
  };
  array_posts.push(newPost);
  res.status(201).json({
    messaggio: "Post creato con successo",
    newPost,
  });
}

//Update
function update(req, res) {
  //console.log(req.params.id);

  postUpdate = array_posts.find((post) => post.id === Number(req.params.id));

  if (!postUpdate) {
    res.status(404);
    return res.json({
      error: "Not Found",
      messaggio: "Pizza non trovata",
    });
  }

  postUpdate.title = req.body.title;
  postUpdate.content = req.body.content;
  postUpdate.image = req.body.image;
  postUpdate.tags = req.body.tags;

  console.log(array_posts);

  res.json(`Post aggiornato: ${postUpdate}`);
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
