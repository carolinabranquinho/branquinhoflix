import React from "react";
import Logo from "../../assets/images/logobranquinhoflix.png";
import "./menu.css";
import ButtonLink from "../ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="BranquinhoFlix logo" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo Vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
