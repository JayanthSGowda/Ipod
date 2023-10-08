import React from "react";
import icon from "../../assets/images/settings.png";


export default class Settings extends React.Component{
    render(){
        return (
            <div className="bg-container">
                <img className="icon-img" src={icon} alt="setiings"/>
                <h2 style={{bottom:"20px"}}>Settings</h2>
            </div>
        );
    }
}