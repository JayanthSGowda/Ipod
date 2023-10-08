import React from "react";
import Menu from "../Interfaces/Menu";
import bg from "../../assets/images/wallpaper1.jpg"

export default class Home extends React.Component{
    render(){
        return (
            <div className="lock-display">
                <img src={bg} alt="bg" className="bg-image"></img>
                <Menu menuItems={["Cover Flow","Music","Games","Settings"]} heading="iPod.js"/>
            </div>
        );
    }
}