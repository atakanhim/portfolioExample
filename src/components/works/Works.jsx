import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "",
      title: "Web Desing",
      desc: "Description web desing",
      img: "",
    },
    {
      id: 2,
      icon: "",
      title: "MobileApp",
      desc: "Description MobileApp",
      img: "",
    },
    {
      id: 3,
      icon: "",
      title: "Branding",
      desc: "Description Branding",
      img: "",
    },
    {
      id: 4,
      icon: "",
      title: "4",
      desc: "Description Branding",
      img: "",
    },
    {
      id: 5,
      icon: "",
      title: "5",
      desc: "Description Branding",
      img: "",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((data) => (
          <div className="container" key={data.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data.icon} alt="" />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <span></span>
                </div>
              </div>
              <div className="right">
                <img src="assets/man.png" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        onClick={() => handleClick("left")}
        alt=""
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        onClick={() => handleClick()}
        alt=""
      />
    </div>
  );
}
