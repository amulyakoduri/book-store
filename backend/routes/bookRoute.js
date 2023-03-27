const express = require("express");
const { getAllBooks ,createBook} = require("../controllers/bookController");

const router = express.Router();
router.route('/books').get(getAllBooks);
router.route('/book/new').post(createBook);

module.exports = router;