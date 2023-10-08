import React from "react";
import "../../css/display.css";
import {Routes, Route ,useNavigate} from "react-router-dom";
import "../../css/staticApp.css"

import Home from "../Apps/Home";
import CoverFlow from "../Apps/CoverFlow";
import Games from "../Apps/Games";
import Settings from "../Apps/Settings";
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
                <Route path="/music" element={<MusicPlayer value={props.musicValue}/>}/>
            </Routes>
        </div>
        

    );    

}
export default Display;
// Uncaught 
// checkForNestedUpdates @ react-dom.development.js:27292
// scheduleUpdateOnFiber @ react-dom.development.js:25475
// enqueueSetState @ react-dom.development.js:14067
// Component.setState @ react.development.js:354
// shouldComponentUpdate @ MusicPlayer.js:23
// checkShouldComponentUpdate @ react-dom.development.js:14134
// updateClassInstance @ react-dom.development.js:14698
// updateClassComponent @ react-dom.development.js:19695
// beginWork @ react-dom.development.js:21611
// beginWork$1 @ react-dom.development.js:27426
// performUnitOfWork @ react-dom.development.js:26557
// workLoopSync @ react-dom.development.js:26466
// renderRootSync @ react-dom.development.js:26434
// performSyncWorkOnRoot @ react-dom.development.js:26085
// flushSyncCallbacks @ react-dom.development.js:12042
// (anonymous) @ react-dom.development.js:25651