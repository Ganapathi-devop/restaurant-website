import { useState } from "react";
import "../style/footer.css";

function Footer() {
  const [subMailToAdmin, setSub] = useState()
  const [bodyMailToAdmin, setBody]= useState()


  const mailToAdmin = ()=>{
    var inp = document.querySelector("#mail-to-admin");
    let body = inp.innerText()
    console.log(body)
    setSub('Mail from website');
    setBody(body)
  }
  return (
    <>
      <div className="footer">
        <div className="col" id="col1">
          <h4>LOCATION </h4>
          <div className="col-content">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2077278815664!2d77.67601902640789!3d13.022439761468343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae10e130d385f5%3A0xad013f80ae4eff6b!2s1st%20A%20Cross%20Rd%2C%20Akshaya%20Nagar%201st%20Block%2C%20Akshya%20Nagar%2C%20Ramamurthy%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560016!5e0!3m2!1sen!2sin!4v1675190263879!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
            <p>
               Akshya
              Nagar 1st Block 1st Cross,
              <br /> Rammurthy nagar, Bangalore-560016
            </p>
          </div>
        </div>
        <div className="col" id="col2">
          <h4>QUICK LINK</h4>
          <div className="col-content">
            <a href="#home">Home</a>
            <a href="#home">Contact</a>
            <a href="#col1">Location</a>
            <div className="social-media">
              <a  className="fb"></a>
              <a href="#" className="insta"></a>
              <a className="utube"></a>
            </div>
          </div>
        </div>
        <div className="col" id="col3">
          <h4>NEWS LETTER</h4>
          <div className="col-content">
            <p>
              Keep up with the good news!
              <br /> Sign up for our newsletter and get the latest on where to
              find us, recipes, & more!
              <br />
              Sign up to receive <b>exclusive offers</b> and be the first to
              know about seasonal specials
            </p>
            <input type="text" className="input-footer" id="mail-to-admin" placeholder="Enter Your Email Id" />
            <a className="btn-footer" href={`href="mailto:ganapathy1red1@gmail.com?subject='${subMailToAdmin}'&body='${bodyMailToAdmin}'"`} onClick={mailToAdmin}>
              Submit <i class="fa-solid fa-utensils"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
