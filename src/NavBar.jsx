import React from "react";
import { Link } from "react-router-dom";
import './index.css';
function NavBar(){
    return <div className="navbar">
    <Link to="/quotes"><button>Comforting Messages</button></Link>
    <Link to="/wallpapers"><button>Wallpapers</button></Link>
    <Link to="/music"><button>Music</button></Link>
   
    </div>
}

export default NavBar;