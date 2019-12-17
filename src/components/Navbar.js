import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";

export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark  px-sm-5">
			  <Link to='/'>
			  <img src={logo} alt="store" className="navbar-brand" height="40px" width="40px"/>
			  </Link>
			  <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
               <Link to="/" className="nav-link">
               products</Link>
              </li>
			  </ul>
			  <Link to="./cart" className="ml-auto">
              <ButtonContainer className="text-dark">
              <span className="mr-2 text-dark">
			  <i className="fa fa-cart-plus"/>
                </span > my cart
              </ButtonContainer>
			  </Link>
			</NavWrapper>
			);
	}
}

  
const NavWrapper = styled.nav`
background: var(--mainBlue);
  .nav-Link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
     text-transform: capitalize;
  }
`;