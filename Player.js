import React from "react";
import "./Player.css";
import Sidebar from "./Siderbar";
import Body from "./Body";
import Footer from "./Footer";

function Player({spotify}){
    return(
        <div className="player">
            <div className="player_body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Player;