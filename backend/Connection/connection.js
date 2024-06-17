const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lakshpatil96k:28MgvqSgUcMoxWQZ@lakshapi.y6og8lj.mongodb.net/bookManagement")
.then(()=>{
    console.log("connected");

});
