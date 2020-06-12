import React from "react";

// STYLES
import "./IdPhoto.css";

// IMG
import idPicture from "../../assets/images/photoId.jpeg";

// COMPONENTS

const IdPhoto = () => {
  return <img className="idPhoto" src={idPicture} alt="Id picture" />;
};

export default IdPhoto;
