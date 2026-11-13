import React from 'react'
import { ChefHat } from 'lucide-react' 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <ChefHat size={30} color="#f97316" strokeWidth={2.5} />
        <span>Recipe Finder</span>
      </div>

      <ul className="nav_links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#search">Search Recipes</a>
        </li>
        <li>
          <a href="#recipes">Recipes</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar