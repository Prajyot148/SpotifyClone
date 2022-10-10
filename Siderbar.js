import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search"; //importing material ui icons package
import {LibraryMusic} from "@material-ui/icons"
import { useDataLayerValue } from "./DataLayer";

function Sidebar(){
    const [{playlists},dispatch]= useDataLayerValue();

    
    //pulling values from context api
    return(
        <div className="sidebar">
            <img
            className="sidebar_logo"
            src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
            alt="Spotify logo"
            />
            <SidebarOption title={"Home"} Icon={HomeIcon}/>
            <SidebarOption title={"Search"} Icon={SearchIcon}/>
            <SidebarOption title={"Your Libaray"} Icon={LibraryMusic}/>
            <br/>
            <strong className="sidebar_title">PLAYLISTS</strong> 
            <hr/>
            {playlists?.items?.map((playlist)=>(
                <SidebarOption title={playlist.name}/>

            ))}
        </div>
        //mapping through playlists to show all the playlists we got from the spotify web api
    );
}

export default Sidebar;