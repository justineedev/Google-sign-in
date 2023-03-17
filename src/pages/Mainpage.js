import Navbar from "../components/Navbar";
import GoogleSignIn from "../components/GoogleSignIn";
import Footer from "../components/Footer";
import Loading from "./Loading";
// import Cookies from "../components/Cookies";

const style = {
  minHeight: "100vh",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  paddingBlock: "15px",
  alignItems: "center",
};
const Mainpage = () => {
  return (
    <div style={style}>
      <Loading />
      <Navbar />
      <GoogleSignIn />
      <Footer />
      {/* <Cookies /> */}
    </div>
  );
};

export default Mainpage;
