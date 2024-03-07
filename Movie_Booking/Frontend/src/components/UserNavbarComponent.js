import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Navbar.css"

function UserNavbarComponent() {
  return (
    <div>
         <div>
       {console.log("in nav")}
      <nav className="navbar navbar-expand-sm mb-3 c-navcolor" >
        <div className="container-fluid ">  

          <div className="c-webname fw-bold">
            {/* <img src={logo1} height="50px" alt="" width="50px"></img>&ensp;&ensp;&ensp; */}
            Movie Booking Platform
          </div>

          <ul className="navbar-nav navbar-right "> 
            <li className="nav-item ">
              <Link to="/" style={{textDecoration:"none"}} className="c-navlink px-4">HOME</Link>
            </li>

            <li className="nav-item" >
              <Link to="/profile1" style={{textDecoration:"none"}} className="c-navlink px-4 ">PROFILE</Link>
            </li>

            <li className="nav-item" >
              <Link to="/" style={{textDecoration:"none"}} className="c-navlink px-4">SHOWTIMES</Link>
            </li>

            <li className="nav-item" >
              <Link to="/movielist" style={{textDecoration:"none"}} className="c-navlink px-4">MOVIES</Link>
            </li>

            <li className="nav-item" >
              <Link to="/theaterlist" style={{textDecoration:"none"}} className="c-navlink px-4">THEATERS</Link>
            </li>

            <li className="nav-item" >
              <Link to="" style={{textDecoration:"none"}} className="c-navlink px-4">BOOKINGS</Link>
            </li>

            <li className="nav-item" >
              <Link to="/logout" style={{textDecoration:"none"}} className="c-navlink px-4">LOGOUT</Link>
            </li>
          </ul>
        </div>

      </nav>
      </div>
      
    </div>
  )
}

export default UserNavbarComponent
