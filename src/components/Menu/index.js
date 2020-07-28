import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logobranquinhoflix.png";
import "./menu.css";
import ButtonLink from "../ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="BranquinhoFlix logo" />
      </Link>

      <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
