import React from "react";
import "../../css/wheel.css";
import ZingTouch from 'zingtouch';

export default class Wheel extends React.Component{
    constructor(){
        super();
        this.angle = 0;
    }

    wheelController = (e) => {
        const { updateActiveMenu } = this.props;

        if (e.detail.distanceFromOrigin === 0) {
            this.angle = e.detail.angle;
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast < 0) {
                updateActiveMenu(1);
            } else {
                updateActiveMenu(-1);
            }

        } else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast > 0) {
                updateActiveMenu(1);
            } else {
                updateActiveMenu(-1);
            }

        }
    }

    componentDidMount(){
        const wheel = document.getElementById("wheel");
        const activeRegion = ZingTouch.Region(wheel);
        activeRegion.bind(wheel, 'rotate', (e) => {
            this.wheelController(e);
        });
        activeRegion.bind(document.getElementById("menu"),"tap",(e)=>{
            this.props.navigate("/");
        
        })
    }

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