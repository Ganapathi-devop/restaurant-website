import "../style/menu.css";
import menuImg from "../img/menu.jpg";

function Menu() {
  return (
    <>
      <div className="menu-div">
        <div className="img-div-menu">
          <img src={menuImg} alt="menunimg" id="img-menu"/>
        </div>
        <div className="txt-div-menu">
          <h4>MENU</h4>
          <p>
            A progression of rare and beautiful ingredients where texture,
            flavour and harmony is paramount. Delve into the Quay dining
            experience with Peter Gilmore’s Menu and a thoughtfully curated Wine
            List by Head Sommelier, Wilem Powell.
          </p>
          <button className="btn-menu">
            menu <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
