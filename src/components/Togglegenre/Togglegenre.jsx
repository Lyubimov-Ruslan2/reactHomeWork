import React from "react";
import "./ToggleGenre.styles.css";

function ToggleGenre() {
  return (
    <div className="flex-row">
      <nav className="Navigator">
        <a className="Navigator__link" href="#">
          All
        </a>
        <a className="Navigator__link" href="#">
          Documentary
        </a>
        <a className="Navigator__link" href="#">
          Comedy
        </a>
        <a className="Navigator__link" href="#">
          Horror
        </a>
        <a className="Navigator__link" href="#">
          Crime
        </a>
      </nav>
      <div className="Sorting">
        <p className="Sorting-items">Sort BY</p>
        <p className="Sorting-items">Release date</p>
      </div>
    </div>
  );
}

export default ToggleGenre;
