import { useState } from "react";
import './GoogleSignIn.css'
import data from './data.json'
import { nanoid } from "nanoid";

function GoogleSignIn() {
    const [scopes, setScopes] = useState([])
    const [scopeButton, setScopeButton] = useState({})
    
    const scopeOnClick = (data) => {
        setScopeButton(data.isSelected ? data.isSelected = false : data.isSelected = true)

       if(scopes.includes(data.scope)){
        setScopes(prevScopes => prevScopes.filter(item => item !== data.scope))
       }else{
        setScopes(prevScopes => [...prevScopes, data.scope])
       }
    }
    console.log(scopes)
    console.log(scopeButton)


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