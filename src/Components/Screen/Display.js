import React from "react";
import "../../css/display.css";
import {Routes, Route} from "react-router-dom";
import "../../css/staticApp.css"

import Home from "../Apps/Home";
import CoverFlow from "../Apps/CoverFlow";
import Games from "../Apps/Games";
import Settings from "../Apps/Settings";
import MusicPlayer from "../Apps/MusicPlayer";


class Display extends React.Component{
    render(){
        return(
            
            <div className="display">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/coverflow" element={<CoverFlow/>}/>
                    <Route path="/games" element={<Games/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/musicplayer" element={<MusicPlayer/>}/>
                </Routes>
            </div>
            

        );    
    }
}
export default Display;