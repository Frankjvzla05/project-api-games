import React from "react";
import { Link } from "react-router-dom";
import control from "../../assets/img/control.png";

const Header = () => {
  return (
    <div className="header">
       <Link className="control" to="/">
        <img className="headerControl" src={control} alt="control" />
      </Link>
        <h1>Videojuegos</h1>
    </div>
  );
};

export default Header;
