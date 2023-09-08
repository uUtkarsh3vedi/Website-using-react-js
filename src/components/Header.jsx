import React from "react";

// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//import { styled } from "@mui/material";
 


//const Logo=styled(`img`)`
//margin-top:0px;


 const Header = () => {
  return (
     <nav>
      <div className="logo">
      <img style={{marginTop:'0px', padding:'0rem',width:'180px',alignItems:'stretch',}} src="https://www.acmesolar.in/upload/dynamicImages/19072018063529_logo.png"alt="Logo"/>
      </div>

        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/contact"}>Contact</HashLink>
            <HashLink to={"/#Social"}>Handles</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
        </main>
        </nav>
  );
};
export default Header;
