import React from "react";
import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer border" style={{backgroundColor:"black", color:"cornsilk"}} >
      <AiFillCopyrightCircle size={30} color="cornsilk" /> 2023 Copyright
    </div>
  );
};

export default Footer;
