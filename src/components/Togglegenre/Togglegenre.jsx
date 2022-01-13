import React from "react";
import "./ToggleGenre.styles.css"

function ToggleGenre(){
    return (
       <nav className="Navigator">
           <a className="Navigator__link" href='#'>All</a>
           <a className="Navigator__link" href='#'>Documentary</a>
           <a className="Navigator__link" href='#'>Comedy</a>
           <a className="Navigator__link" href='#'>Horror</a>
           <a className="Navigator__link" href='#'>Crime</a>
       </nav>
        );
}


export default ToggleGenre;