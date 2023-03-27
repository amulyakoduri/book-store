const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
      },
      description: {
        type: String,
        required: [true, "Please Enter product Description"],
      },
      user:{
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true
      }
}) 


module.export = mongoose.model('Book', bookSchema)
