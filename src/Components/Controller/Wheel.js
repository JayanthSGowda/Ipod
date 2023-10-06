import React from "react";
import "../../css/wheel.css";


export default class Wheel extends React.Component{
    render(){
        return(
            <div className="wheel-container" id="wheel-container">
                <div className="wheel" id="wheel" >
                    <div className="controll" id="menu">
                        <div >MENU</div>
                    </div>
                    <div className="controll" id="forward">
                        <i className="fas fa-fast-forward"></i>
                    </div>
                    <div className="controll" id="play-pause">
                        <div>
                            <i className="fas fa-play"></i>
                            <i className="fas fa-pause"></i>
                        </div>
                    </div>
                    <div className="controll" id="backward">
                        <i className="fas fa-fast-backward"></i>
                    </div>
                </div>
                <div className="center" id="center"></div>

            </div>
        );
    }
}