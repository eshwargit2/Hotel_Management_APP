import React from 'react'
import './Nav.css'


const Nav = () => {
  return (
    <div>
       <nav>
         <h1>RHS</h1>
            <ul>
                <span class="material-symbols-outlined">search</span>
                <li>Home</li>               
                <li>Add Hotel </li>
                <li>Delete Hotel</li>
            </ul>
       </nav>
    </div>
  )
}

export default Nav