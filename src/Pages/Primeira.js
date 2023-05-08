import Pokemon from "../Hooks/imagem";
import { useEffect, useState } from "react";
import "./Primeiro.css";
import { Card } from "antd";
const { Meta } = Card;

const Primeira = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    async function pegarNome() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setName(data);
    }
    pegarNome();
  });

  return (
    <div id="primeiro">
      {name &&
        name.results.map((item) => (
          <Card
            id="Card"
            key={item.name}
            hoverable
            style={{
              width: 200,
              height: 200,
            }}
            cover={<Pokemon pokemonName={item.name} />}
          >
            <Meta title={item.name} />
          </Card>
        ))}
    </div>
  );
};

export default Primeira;
