import "./Home.css";
import Carrousel from "../Components/Carousel";
import { Card1, Card2, Card3 } from "../Components/Card";

const Principal = () => {
  return (
    <div id="principal">
      <Carrousel />
      <div id="containerCards">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
};

export default Principal;
