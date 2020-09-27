import React, { useState } from "react";
import { Link } from "@reach/router";

//COMPONENTS
import { StyledHeader } from "../styled-components/StyledHeader";
console.log("render");
const Header = () => {
  return (
    <StyledHeader>
      <div>
        <a target="_blank" href="https://github.com/wafy89">
          Wafi Amer
        </a>
      </div>
      <div>
        <Link to="/">Home Page</Link>
        <Link create={true} to="/new">
          Create Employee
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
