import { useState } from "react";
import './GoogleSignIn.css'
import data from '../data.json'
import { nanoid } from "nanoid";

function GoogleSignIn() {
    const [scopes, setScopes] = useState([])
    const [accessToken, setAccessToken] = useState("")

    const scopeOnClick = (data) => {
        data.isSelected = !data.isSelected

       if(scopes.includes(data.scope)){
        setScopes(prevScopes => prevScopes.filter(item => item !== data.scope))
       }else{
        setScopes(prevScopes => [...prevScopes, data.scope])
       }
    }

    const signIn = () => {
        window.open("https://accounts.google.com/o/oauth2/v2/auth?" +
        "scope=" + scopes.join(" ") +
        "&response_type=token" +
        "&redirect_uri=https://google-chat-sign-in.vercel.app/callback.html" +
        "&client_id=743985126559-t883n6da4nairfj6m2lfal0p3a2ulr9c.apps.googleusercontent.com", "_blank", "height=600 width=500 top=" +(window.innerHeight / 2 - 300) + ",left=" + (window.innerWidth / 2 - 400));
    }

    const messageListener = (event) => {
      document.getElementById("access-token").innerHTML = event.data
    }

    
    window.addEventListener("message", messageListener)

    const gScopeButtons = data.map((item) => {
        return (
            <button 
                key={nanoid()}
                onClick={() => scopeOnClick(item)}
                className={item.isSelected ? "gButton active" : "gButton"} 
                style={{background: item.color}}>
                    <img className="iconBtn" src={item.image} alt="scope button"></img>
                        {item.name}
            </button>
        )
    })
    return (
        <div className="gWrapper">
            <h1>Google Token</h1>

        <div className="gBox">
            <div className="gScopesContainer">
                {gScopeButtons}
            </div>
            
            <button 
                type="button"
                className="login-with-google-btn"
                onClick={signIn}     
            >
                    Sign in with Google
            </button>
        </div>
        <div className="access-token-container">
                <p>Access token:</p>
                <pre className="access-token" id="access-token"></pre>
            </div>
        
            
        </div>
        
    )
}

export default GoogleSignIn;