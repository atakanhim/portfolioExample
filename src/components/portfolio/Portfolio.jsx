import { useEffect, useState } from "react";
import "./Portfolio.scss";
import PortFolioList from "./portfolioList/PortfolioList";
import { webPortfolio, featuredPortFolio } from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "featured",
    },
    {
      id: "desing",
      title: "desing",
    },
    {
      id: "mobil",
      title: "mobil app",
    },
    {
      id: "web",
      title: "webb app",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortFolio);
        break;
      case "web":
        setData(webPortfolio);
        break;

      default:
        setData(featuredPortFolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortFolioList
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (
          <div key={data.id} className="item">
            <img src={data.img} alt="" height="300px"></img>
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
