
const express = require("express");
const booksModel = require("../Models/booksModel");

const router = express.Router();

router.post("/add", async (req, res) =>{

    try{
        const data = req.body;
        const newBook = new booksModel(data);
        await newBook.save();
        
        res.json({sucess:true, message:"book added successfully"})

    }catch(error){
        console.log(error);
    }
})

router.get("/getBooks", async(req, res) =>{
    let books;
    try{
        books = await booksModel.find();
    }catch(error){
        console.log(error);
    }
    res.json(books);
})

router.get("/getBooks/:id", async(req, res) =>{
    let books;
    const id = req.params.id;
    try{
        books = await booksModel.findById(id);
        res.json(books);
    }catch(error){
        console.log(error);
    }
   
})

router.put("/updateBook/:id", async (req, res) =>{
    const id = req.params.id;
    const {title, author, year, image} = req.body;
    let book;
    try{
    book = await booksModel.findByIdAndUpdate(id,{
        title,
        author,
        year,
        image,
    });
    }catch(error){
        console.log(error);
    }
   
    await book.save();
    res.json({message:"Book updated successfully"});
})

router.delete("/deleteBook/:id", async (req, res) => {
    const id = req.params.id;
    try{
        await booksModel.findByIdAndDelete(id);
    }catch(error){

    }
    res.json({message:"Deleted successfully"});
})


module.exports = router; 