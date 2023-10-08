import React from "react";
import icon from "../../assets/images/games.jpeg"
export default class Games extends React.Component{
    render(){
        return (
            <div className="bg-container">
                <img className="icon-img" src={icon} alt="games"/>
                <h2 style={{bottom:"20px"}}>Games</h2>
            </div>
        );
    }
}