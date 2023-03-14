import "../styles/Cookies.css";
import cookieIcon from "../images/Cookie.png";
export default function Cookies() {
  const width = window.innerWidth;
  console.log(width);
  return (
    <>
      {width > 1080 && (
        <div className="cookies-wrapper">
          <img src={cookieIcon} alt="cookies" />
          <p>
            This website uses local storage to enhance your browsing experience.
          </p>
          <button>Alright!</button>
        </div>
      )}
    </>
  );
}
