import { Carousel } from "antd";
import "./Carrousel.css"
import Imagem from "../Assets/kuranaga🐟 on Twitter.png"
const contentStyle = {
  height: "360px",
  color: "#fff",
  marginTop: "0px",
  lineHeight: "360px",
  textAlign: "center",
  background: "#364d79",
};
const Carrousel = () => (
  <Carousel autoplay>
    <div>
      <img style={contentStyle}  src={Imagem} alt="" />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Carrousel;
