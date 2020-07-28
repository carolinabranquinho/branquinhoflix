import React from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  padding: 50px 5%;
  flex: 1;
`;

function PageDefault({ children }) {
  return (
    <React.Fragment>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
}

export default PageDefault;
