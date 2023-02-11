import { useRef, useState } from "react";
import banner from "../img/banner3.jpg";
import boyIcon from "../img/boy.png";
import businessmanIcon from "../img/businessman.png";
import grandfatherIcon from "../img/grandfather.png";
import womenIcon from "../img/woman.png";
import "../style/testimonial.css";

function Testimonial() {
  const [sliderDiv, setSliderDiv] = useState();
  //   const preSlide = useRef()
  const sliderDivArr = [
    <div className="testimonee" id="testimonee1">
      <img src={boyIcon} alt="user" className="img-testimonee" />
      <div className="div">
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-regular fa-star rating-icon"></i>
        <i class="fa-regular fa-star rating-icon"></i>
      </div>

      <p className="txt-testimonee">
        Thank you for dinner last night. It was amazing!! I have to say it’s the
        best meal I have had in quite some time. You will definitely be seeing
        more of me eating at your establishment.
      </p>
    </div>,
    <div className="testimonee" id="testimonee2">
      <img src={businessmanIcon} alt="user" className="img-testimonee" />
      <div className="div">
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
      </div>

      <p className="txt-testimonee">
        WOW!!! What an outstanding dinner you prepared at the Johnstons on
        Friday evening!!! It was an honor for me to be invited and experience
        firsthand your incredible culinary gift!
      </p>
    </div>,
    <div className="testimonee" id="testimonee3">
      <img src={grandfatherIcon} alt="user" className="img-testimonee" />
      <div className="div">
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-regular fa-star rating-icon"></i>
      </div>

      <p className="txt-testimonee">
        Everyone had a wonderful time at The French Gourmet last night. As
        expected, the food was delicious and our servers were so friendly we
        loved them! It was a delightful experience all round.
      </p>
    </div>,
    <div className="testimonee" id="testimonee4">
      <img src={womenIcon} alt="user" className="img-testimonee" />
      <div className="div">
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-solid fa-star rating-icon"></i>
        <i class="fa-regular fa-star rating-icon"></i>
      </div>

      <p className="txt-testimonee">
        Thank you for dinner last night. It was amazing!! I have to say it’s the
        best meal I have had in quite some time. You will definitely be seeing
        more of me eating at your establishment.
      </p>
    </div>,
  ];
  function sliderChanger() {
    const num = sliderDivArr[Math.floor(Math.random() * sliderDivArr.length)];
    if (sliderDiv === null || sliderDiv === undefined) {
      setSliderDiv(num, console.log(sliderDiv));
    } else if (sliderDiv.props.id != num.props.id) {
      setSliderDiv(num, console.log(sliderDiv));
    } else {
      setSliderDiv(
        sliderDivArr[Math.floor(Math.random() * sliderDivArr.length)],
        console.log(sliderDiv)
      );
    }
  }
  //   const sliderChanger = (p) => {

  //   };
  return (
    <>
      <div className="testimonial-div">
        <div className="bg-cover">
          <div className="row-testimonial">
            <button
              className="fa-solid fa-arrow-left icon-btn"
              onClick={sliderChanger}
            ></button>
            {sliderDiv != undefined
              ? sliderDiv
              : sliderDivArr[Math.floor(Math.random() * sliderDivArr.length)]}
            <button
              className="fa-solid fa-arrow-right icon-btn"
              onClick={sliderChanger}
            ></button>
          </div>
        </div>
        <div className="pic">
          <img src={banner} alt="banner" id="pic-img" />
        </div>
      </div>
    </>
  );
}

export default Testimonial;
