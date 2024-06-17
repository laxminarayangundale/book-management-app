import React from "react";
import axios from "axios";
import "./BookSection.css";
import { useEffect } from "react";


function BookSection({bookData}){


        const handleDelete = async ( id) =>{
            console.log(id);
            try{
                const response = await axios.delete(`http://localhost:3000/api/book//deleteBook/${id}` );
                console.log(response.data);
            }catch(e){
                console.log(e);
            }
        };
        const handleUpdate = async ( id) =>{
            console.log(id);
            try{
                const response = await axios.put(`http://localhost:3000/api/book//updateBook/${id}` );
                console.log(response.data);
            }catch(e){
                console.log(e);
            }
        };

        useEffect(()=>{
            handleDelete();
        });
      
    

    return (

    <div className=" display-books  d-flex justify-content-center align-items-center">

       { bookData.map((item) =>{
        return <div className="card d-flex">
        {/* <img src={item.image} alt={" "} className="card-image" /> */}
        <div className="card-content">
            <h2 className="card-title"> <strong>{item.title}</strong></h2>
            <p className="card-details">Author: {item.author}</p>
            <p className="card-details">Year: {item.year}</p>
            <div className="card-buttons">
                <button className="update-btn" onClick={ () => { handleUpdate(item._id)}}>Update</button>
                <button className="delete-btn" onClick={ () => { handleDelete(item._id)}}>Delete</button>
            </div>
        </div>
    </div>
        
    })}
     
    </div>
        );
};

export default BookSection;