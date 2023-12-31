import React from "react";
import "./PopUp.css";
export default function PopUp({
  url,
  PopUpActive,
  SetPopUpActive,
  SetScaledImgSrc,
}) {
  return (
    <div
      className="PopUp"
      onClick={() => {
        SetPopUpActive(false);
        SetScaledImgSrc(null);
      }}
    >
      <div className="PopUp_Main">
        <img className="ScaledImage" src={url}></img>
      </div>
    </div>
  );
}
