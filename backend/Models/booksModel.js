const mongoose = require("mongoose");

const booksModel = new mongoose.Schema({
    title:{type: String, required: true},
    author:{type: String, required: true},
    year:{type: Number, required: true},
    image:{type: String, required: true},
});

module.exports = new mongoose.model("books", booksModel);

