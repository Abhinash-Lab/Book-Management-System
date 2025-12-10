const { fetchAllBooks, addBook, fetchSingleBook, updateBook, deleteBook } = require("../Controller/book.controller");

const router = require("express").Router();

router.route("/").get(fetchAllBooks).post(addBook);
router.route("/:id").get(fetchSingleBook).patch(updateBook).delete(deleteBook);

module.exports = router;