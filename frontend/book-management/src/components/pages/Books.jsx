import React from "react";
import axios from "axios";
import BookSection from "../bookSection/BookSection";
import {useState, useEffect} from "react";


function Books(){

    const[data, setData] = useState([{
        title: '',
        author: '',
        year: '',
        image:'',
    }]);

    useEffect(() => {
        const fetchData = async () =>{
            try{
            const response = await axios.get("http://localhost:3000/api/book/getBooks");
            
            // const Data = await response.data;
            setData(response.data);
            }catch(e){
                console.log(e);
            }

            
        };
        fetchData();
    },[]);

    return(
        <>
        <div className = "d-flex justify-content-center align-items-center p-3">
        <h4 >BOOKS SECTION</h4>
        </div>
        

        <div>    
            {data ? <BookSection bookData={data} />: <div> loading... </div> }
            
        </div>
        
        </>
    )
}

export default Books;