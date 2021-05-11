import React from 'react';
import styled from 'styled-components';
import './body.css'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 14px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:#8533ff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
  @media (max-width: 280px){
      padding-left: 2rem;
      left: 2px;
      li {
        color: #ffffff;
      }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home <i className="arrow down"></i></li>
      <li style={{color:"#ffdb4d"}}>Pages <i className="arrow down"></i></li>
      <li style={{marginTop:"0.5rem"}}>Services</li>
      <li style={{marginTop:"0.5rem"}}>Blog</li>
      <li>Contact <i className="arrow down"></i></li>
    </Ul>
  )
}

export default RightNav