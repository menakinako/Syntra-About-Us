import React from 'react';

import Burger from './burger';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  
  background-color: ${({ useTransparent }) =>
  useTransparent ? "transparent" : "#ffdb4d"};
  color: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  .logo {
    color: #fff;
    padding: 15px 0;
  
  }
`


const Navbar = (props) => {
  const { useTransparent } = props;
  return (
    <Nav useTransparent={useTransparent}>
    <div>
    <Typography variant="h4"  color="primary"  style={{ marginTop:"0.6rem",color: "#ffffff"}}>SYNTRA</Typography>
      </div>
      <Burger/>
    </Nav>
  )
}

export default Navbar