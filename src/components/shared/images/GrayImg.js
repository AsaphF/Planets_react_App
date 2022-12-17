import React from "react";
import "./style.css"

function GrayImg(props) {
    return(
      <>
      <img className={props.gray ? "grey_img" : "color_img"} src={props.src}></img>
      </>
    )
}
export default GrayImg
