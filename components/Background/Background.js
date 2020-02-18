import React from "react";
import BackgroundImage from "../../assets/task-management.svg";

const Background = () => {
  return (
    <div id="background-image">
      <style jsx>{`
        #background-image {
          width: 100%;
          height: 100vh;
          position: absolute;
        }
      `}</style>
      <img src={BackgroundImage} alt="background-image-home" />
    </div>
  );
};

export default Background;
