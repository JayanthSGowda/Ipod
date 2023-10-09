import React from "react";
import "../../css/display.css";
import {Routes, Route ,useNavigate} from "react-router-dom";
import "../../css/staticApp.css"

import Home from "../Apps/Home";
import CoverFlow from "../Apps/CoverFlow";
import Games from "../Apps/Games";
import Settings from "../Apps/Settings";
import Music from "../Apps/Music";
import MusicPlayer from "../Apps/MusicPlayer";


function Display (props){
    const navigate = useNavigate();
    const navigateTo  = (link) => {
        navigate(link);
    }
    
    return(
        
        <div className="display">
            <Routes>
                <Route path="/" element={<Home value={props.homeValue} navigate={navigateTo}/>}/>
                <Route path="/coverflow" element={<CoverFlow/>}/>
                <Route path="/games" element={<Games/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/music" element={<Music value={props.musicValue} navigate={navigateTo}/>}/>
                <Route path="/music/player" element={<MusicPlayer/>}/>
            </Routes>
        </div>
        

    );    

}
export default Display;
