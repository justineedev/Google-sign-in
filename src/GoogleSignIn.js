import { useState } from "react";
import './GoogleSignIn.css'
import data from './data.json'
import { nanoid } from "nanoid";

function GoogleSignIn() {
    const [scopes, setScopes] = useState([])

    
    const scopeOnClick = (scope) => {
       if(scopes.includes(scope)){
        setScopes(prevScopes => prevScopes.filter(item => item !== scope))
       }else{
        setScopes(prevScopes => [...prevScopes, scope])
       }
    }


    const gScopeButtons = data.map((item, key) => {
        return (
            <button 
                key={nanoid()}
                onClick={() => scopeOnClick(item.scope, key)}
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

        <div className="gScopesContainer">
            {gScopeButtons}
        </div>
        <button type="button" className="login-with-google-btn" >
            Sign in with Google
        </button>
        </div>
    )
}

export default GoogleSignIn;