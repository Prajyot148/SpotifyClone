//This is a configuaraton file so that all API lofic stays at a place and in organized manner

export const authEndpoint = "https://accounts.spotify.com/authorize"; //the URL where we need to authenticate using Spotify. All Spotify Authentication requests must be passed through this URL.
const redirectUri= "https://localhost:3000/callback";  //the one which we gave in the Spotify Web API settings,this states where to take back the user if the Spotify login was successful.
const clientId= "b0b4d8910b6a4320bb70484accbf6dd7";  //the Client ID provided to you by the Spotify Web API and you need to mention it here.



//scopes are basically permissions which you need to ask Spotify for. More such permissions are available on Spotify API Documentation
const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];



//gettokenfromurl will extract the access token grom url once we have it
export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        let parts=item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;

    },{});
}

//The loginUrl is the final URL which needs to be called in order to authorize an user for our Spotify Clone app. This URL contains the Client ID and all the permissions so that Spotify knows about our app and allows user authentication.

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

