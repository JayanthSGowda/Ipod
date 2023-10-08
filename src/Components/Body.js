import React, { useState } from "react";
import '../css/body.css';
import Display from "./Screen/Display";
import Wheel from "./Controller/Wheel";
import {useLocation, useNavigate} from "react-router-dom";
// import { useState } from 'react';


function Body () {
  const [homeValue, setHomeValue] = useState(0);
  const [musicValue,setMusicValue] = useState(0);
  const location = useLocation(); 
  const navigate = useNavigate();

  
  
  //update active menu
  const updateActiveMenu = (e) => {
    if(location.pathname === "/"){
      setHomeValue(homeValue+e);
    }else if(location.pathname === "/music"){
      setMusicValue(musicValue+e);
    }
  }


  return (
    <div className="case">
      <Display homeValue={homeValue} musicValue={musicValue}/>
      <Wheel updateActiveMenu={(e)=>updateActiveMenu(e)} navigate={(e)=>{navigate(e)}}/>
    </div>
  );

}
export default Body;