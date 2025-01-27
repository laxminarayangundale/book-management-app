import React from "react"
import {Link} from "react-router-dom"
function Navbar(){

    return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <Link className="navbar-brand" to="/">BOOK MANAGEMENT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
      <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/books">Books</Link>
        <Link className="nav-link" to="/addBooks">Add Books</Link>
      </div>
    </div>
  </div>
</nav>
   </>
    )
}

export default Navbar;