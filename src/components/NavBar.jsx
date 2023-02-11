import "../style/navbar.css";
import pepperSprinkler from "../img/pepper-sprinkler.png";

function NavBar() {
  return (
    <>
      <ul className="navbar-ul" onMouseLeave={()=>{
        document.querySelector(".icon").style.visibility="hidden"
      }}>
        <img src={pepperSprinkler} id="icon1" alt="icon" className="icon" />
        <li>
          <a href="#home"
            onMouseEnter={() => {
              document.querySelector(".icon").style.visibility="visible"
              document.querySelector(".icon").style.left = "75px";
            }}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => {
              document.querySelector(".icon").style.visibility="visible"
              document.querySelector(".icon").style.left = "160px";
            }}
          >
            MENU
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => {
              document.querySelector(".icon").style.visibility="visible"
              document.querySelector(".icon").style.left = "245px";
            }}
          >
            CONTACT
          </a>
        </li>
        <li>
          <a 
            href="#col1"
            onMouseEnter={() => {
              document.querySelector(".icon").style.visibility="visible"
              document.querySelector(".icon").style.left = "350px";
            }}
          >
            LOCATION
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
