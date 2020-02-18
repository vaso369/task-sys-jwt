import React from "react";
import LogoImage from "../../assets/TMSLogo.svg";
//import '../Background/Background.css';
const Logo = () => {
  return (
    <div id="logo">
      <style jsx>{`
        #logo {
          width: 18%;
          height: 22vh;
          position: absolute;
          top: 40%;
          right: 1.5%;
        }
      `}</style>
      <img
        src={require("../../assets/TMSLogo.svg")}
        alt="logo-task-management-system"
      />
    </div>
  );
};
export default Logo;
