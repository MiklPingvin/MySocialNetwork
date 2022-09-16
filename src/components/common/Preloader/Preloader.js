import preloader from "../../../assets/imeges/preloader.svg";
import React from "react";
import s from "./Preloader.module.css";

let Preloader=()=>{
    return   <img className={s.img} src={preloader} alt=""/>
}

export default Preloader