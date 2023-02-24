import { useEffect, useState } from 'react';

function GoogleCallback(){

    const [count, setCount] = useState(3)

    const hash = window.location.hash
    const params = new URLSearchParams(hash)
    const accessToken = params.get("access_token")

   
      useEffect(() => {
        if(accessToken && count > 0){
          const timerId = setInterval(() => {
            setCount(prevCount => prevCount - 1)
          }, 1000);
          
          return () => {
            clearInterval(timerId)
          };
        }else if(count === 0){
          window.opener.postMessage(accessToken, "*")
          window.close()
        }
      }, [count, accessToken]);

    const style = {
      background: "#1e1e1e",
      width: "100vw",
      height: "100vh",
      display: "flex",
      placeItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      color: "lightgreen"
    }
  
  return (
    <div>

      {
        accessToken &&
          <div style={style}>
            <h1>Successful!</h1>
            <img width={100} src="https://cdn-icons-png.flaticon.com/512/390/390973.png" alt="success"></img>
            <p>Will be redirected to main page in {count > 1 ? count + " seconds" : count + " second"}</p>
          </div>
      }
    </div>
  )
}

export default GoogleCallback;