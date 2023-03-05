function GoogleCallback() {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash);
  const accessToken = params.get("access_token");

  if (accessToken) {
    window.opener.postMessage(accessToken, "*");
    window.close();
  }

  const style = {
    background: "#1e1e1e",
    width: "100vw",
    height: "100vh",
    display: "flex",
    placeItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "lightgreen",
  };

  return (
    <div>
      {accessToken ? (
        <div style={style}>
          <h1>Successful!</h1>
          <img
            width={100}
            src="https://cdn-icons-png.flaticon.com/512/390/390973.png"
            alt="success"
          ></img>
        </div>
      ) : (
        <h1>Unsuccessful</h1>
      )}
    </div>
  );
}

export default GoogleCallback;
