import Navbar from "../components/Navbar";
import GoogleSignIn from "../components/GoogleSignIn";
import Footer from "../components/Footer";
import Loading from "./Loading";
// import Cookies from "../components/Cookies";
const Mainpage = () => {
  return (
    <>
      <Loading />
      <Navbar />
      <GoogleSignIn />
      <Footer />
      {/* <Cookies /> */}
    </>
  );
};

export default Mainpage;
