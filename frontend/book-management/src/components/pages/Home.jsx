import react from "react";
import { Link } from "react-router-dom";

function Home(){

    return(
    <>
    <div className="container-fluid ">
        <div className="row container ms-auto">
            <div className="col=lg-6 d-flex justify-content-center align-items-start flex-column" style={{height:"91.5vh"}}>
                <h2 style={{fontSize:"70px"}}>BOOK STORE</h2>
            <button ml-3> <Link className="nav-link" to="/books">Books</Link></button>  
            </div>
           
        </div>
    </div>


    </>
    )
}

export default Home;