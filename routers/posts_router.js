//import di express
const express = require("express");
//ottenimento del router
const router = express.Router();

//import del controller
const post_controller = require("../controllers/posts_controller");

//index -utilizzo del controller per richiamare la funzione desiderata, in base alla rotta)
router.get("/", post_controller.index);

//show -utilizzo del controller per richiamare la funzione desiderata, in base alla rotta)
router.get("/:id", post_controller.show);

//store -utilizzo del controller per richiamare la funzione desiderata, in base alla rotta)
router.post("/", post_controller.store);

//update -utilizzo del controller per richiamare la funzione desiderata, in base alla rotta)
router.put("/:id", post_controller.update);

//modify -utilizzo del controller per richiamare la funzione desiderata, in base alla rotta)
router.patch("/:id", post_controller.modify);

//destroy -utilizzo del controller per richiamare la funzione desiderata, in base alla rotta)
router.delete("/:id", post_controller.destroy);

//export del router (necessario a server.js affinchè il router stesso possa ricevere un prefisso per le rotte)
module.exports = router;
