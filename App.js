
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from "./Spotify";
import { useState } from 'react';
import { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";  //import spotifywebapi from package installed
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';

const spotify=new SpotifyWebApi(); //initializw object named spotify with spotifywebapi class. object spotify represents spotify

function App() {
  const [{user,token},dispatch]= useDataLayerValue();

  
  //used useeffect so that code runs only once the page is loaded
  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;

    //checking if token exists,if one exists,that means the user is logged in
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:"_token",
      });
      console.log("[token]",token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        dispatch({
          type:"SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlists)=>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:playlists,
        });
      });
    }
    
  },[]);
  return (
    <div className="App">
      {token? <Player spotify={spotify}/>:<Login/>}
      
      
    </div>
  );
}

export default App;
