import { useEffect, useState } from "react";

//For CSS
import "./GoogleSignIn.css";

//The Data
import data from "../data.json";

//For random ID
import { nanoid } from "nanoid";

function GoogleSignIn() {
  const [scopes, setScopes] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const scopeOnClick = (data) => {
    data.isSelected = !data.isSelected;

    if (scopes.includes(data.scope)) {
      setScopes((prevScopes) =>
        prevScopes.filter((item) => item !== data.scope)
      );
    } else {
      setScopes((prevScopes) => [...prevScopes, data.scope]);
    }
  };

  const attributes = {
    authUrl: "https://accounts.google.com/o/oauth2/v2/auth",
    redirect_uri: `${window.location.origin}/GoogleCallback`,
    scope: scopes.join(" "),
    client_id:
      "743985126559-t883n6da4nairfj6m2lfal0p3a2ulr9c.apps.googleusercontent.com",
    response_type: "token",
    state: nanoid(),
  };

  const signIn = () => {
    window.open(
      `${attributes.authUrl}?response_type=${attributes.response_type}&scope=${attributes.scope}&client_id=${attributes.client_id}&redirect_uri=${attributes.redirect_uri}&state=${attributes.state}`,
      "_blank",
      "height=600 width=500 top=" +
        (window.outerHeight / 2 + window.screenY - 600 / 2) +
        ",left=" +
        (window.outerWidth / 2 + window.screenX - 500 / 2)
    );
  };

  useEffect(() => {
    const messageListener = (event) => {
      if (typeof event.data === "string") {
        setAccessToken(event.data);
      }
    };

    window.addEventListener("message", messageListener);

    return () => {
      window.removeEventListener("message", messageListener);
    };
  }, [accessToken]);

  const copyAccessToken = () => {
    if (!isCopied) {
      setIsCopied(true);
      navigator.clipboard.writeText(accessToken);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const gScopeButtons = data.map((item) => {
    return (
      <button
        key={nanoid()}
        onClick={() => scopeOnClick(item)}
        className={item.isSelected ? "gButton active" : "gButton"}
        style={{ background: item.color }}
      >
        <img className="iconBtn" src={item.image} alt="scope button"></img>
        {item.name}
      </button>
    );
  });

  return (
    <div className="gWrapper">
      <h1>Google Token</h1>

      <div className="gBox">
        <strong>Select scopes:</strong>
        <div className="gScopesContainer">{gScopeButtons}</div>

        {scopes.length > 0 && (
          <button
            type="button"
            className="login-with-google-btn"
            onClick={signIn}
          >
            Sign in with Google
          </button>
        )}
      </div>

      {accessToken && (
        <div className="access-token-container">
          <span className="access-token-title">Acces token:</span>
          <span className="access-token">{accessToken}</span>
          <i
            className={
              !isCopied
                ? "fa-regular fa-clipboard access-token-icon"
                : "fa-regular fa-circle-check access-token-icon"
            }
            onClick={copyAccessToken}
          ></i>
        </div>
      )}
    </div>
  );
}

export default GoogleSignIn;
