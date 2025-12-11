import React from 'react'
import "./nav.css"
function Navbar() {
  return (
    <div>
        <nav>
            <ul>
               <li className="list"><a href="">Menu</a></li>
               <li className="list"><a href="">Location</a></li>
               <li className="list"><a href="">About us</a></li>
               <li className="list"><a href="">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar