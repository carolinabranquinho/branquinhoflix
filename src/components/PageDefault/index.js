import React from 'react';
import styled, { css } from 'styled-components';
import Footer from '../Footer';
import Menu from '../Menu';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  padding: 50px 5%;
  flex: 1;

  ${({ paddingAll }) =>
    css`
      padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
