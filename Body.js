import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import {PlayCircleFilled, Favorite, MoreHoriz} from "@material-ui/icons";
import Songrow from "./Songrow";


function Body({spotify}){
    const[{discover_weekly},dispatch]= useDataLayerValue();
    

    return(
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body_info">
                <img src={discover_weekly?.images[0]?.url} alt=""/>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>

            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilled className="body_shuffle"/>
                    <Favorite fontsize="large"/>
                    <MoreHoriz/>

                </div>
                {discover_weekly?.tracks.items.map((item)=>(
                    <Songrow track={item.track}/>
                ))}
            </div>
        </div>
    );

}

export default Body;
