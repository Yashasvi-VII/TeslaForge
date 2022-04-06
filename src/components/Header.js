import React, { useState } from "react";
import styled from "styled-components";
import "./Header.css";
import logosmall from "../assets/teslaLogoSmall.svg";
//import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div className="logo">
        {" "}
        <img src={logosmall} alt="Tesla Logo" />
      </div>

      <Menu>
        <div class="test">
          <a href="#">Model 3</a>

          <a href="#">Model Y</a>

          <a href="#">Model X</a>

          <a href="#">Model S</a>

          <a href="#">Solar Roof</a>

          <a href="#">Solar Panels</a>
        </div>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setOpen(true)}>
          <a href="#">Menu</a>
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={open}>
        <CustomClose onClick={() => setOpen(false)}>
          <a href="#">Close</a>
        </CustomClose>
        <li>
          <a href="#"> Solar Roof</a>
        </li>
        <li>
          {" "}
          <a href="#"> Solar Panels</a>{" "}
        </li>

        <li>
          {" "}
          <a href="#"> Existing Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#"> Used Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#"> Trade-In</a>
        </li>
        <li>
          {" "}
          <a href="#"> Test Drive</a>
        </li>
        <li>
          {" "}
          <a href="#"> Powerwall</a>
        </li>
        <li>
          {" "}
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          {" "}
          <a href="#">Utilities</a>
        </li>
        <li>
          {" "}
          <a href="#">Charging</a>
        </li>
        <li>
          {" "}
          <a href="#">Find Us</a>
        </li>
        <li>
          {" "}
          <a href="#"> Support</a>
        </li>
        <li>
          {" "}
          <a href="#"> Investor Relations</a>
        </li>
        <li>
          {" "}
          <a href="#"> Shop</a>
        </li>
        <li>
          {" "}
          <a href="#"> Account</a>
        </li>
        <li>
          {" "}
          <a href="#"> More </a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 1px;
  margin-top: 1px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    height: 1rem;
    width: 3.5rem;
    font-width: 600;
    // text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-width: 600;
    text-transform: uppercase;
    margin-right: 10px;
    justify-content: center;
    // background-color: rgba(204, 204, 204, 1);
    // border-radius: 2rem;
    // opacity: 1;
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled.div`
  display: flex;
  justify-content: flex-end;
  a {
    cursor: pointer;
  }
`;
