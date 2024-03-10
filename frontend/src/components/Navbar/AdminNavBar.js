import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Admin</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to={"/"} >Add Courses</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/cource-table"} >Course Table</Link>      </li>
      <li className="nav-item">
      <Link className="nav-link" to={"/"} >Add Courses</Link>
      </li>
      
    </ul>
  </div>
</nav>
  )
}

export default AdminNavBar