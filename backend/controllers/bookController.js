const Book = require("../models/bookModel")


exports.createBook = (req,res,next) => {
    const book = Book.create(req.body)

    res.status(200).json({
        sucess: true,
        book
    })
}



exports.getAllBooks = (req,res,next) => {
    res.status(200).json({
        "message": "all books avilable"
    })
};

