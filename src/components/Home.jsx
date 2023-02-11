import NavBar from "./NavBar";
import logo from "../img/logo2.png";
import "../style/home.css";
function Home() {
  return (
    <>
      <div className="banner-div">
        <div className="inner-banner-div">
          <div className="header-div" id="home">
            <h4 id="logo-h4">Soul's kitchen</h4>
            <NavBar />
          </div>
          <div className="home-banner">
              <img src={logo} alt="soul's kitchen" className="logo-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
