import React, { useState } from "react";
import { Link } from "@reach/router";

import { StyledHeader } from "../styled-components/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <div>Home Page</div>
      </Link>
      <Link to="/new">
        <div>Create Employee</div>
      </Link>

      <div>@ Wafi Amer</div>
    </StyledHeader>
  );
};

export default Header;
