const express = require("express");
const router = express.Router();
const noteController = require("./../controller/noteController");

router.route("/")
    .post(noteController.createNote)
    .get(noteController.getAllNote);

router.route("/:id")
    .get(noteController.getNote)
    .patch(noteController.updateNote)
    .delete(noteController.deleteNote);    

module.exports = router;    

