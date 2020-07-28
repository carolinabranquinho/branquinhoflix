import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CadastroVideo from "./pages/cadastro/video";
import CadastroCategoria from "./pages/cadastro/categoria";

//desafio colocar joguinho
const Page404 = () => <div>Página 404</div>;

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Page404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
