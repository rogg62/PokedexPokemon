import { useState, useEffect } from "react";

const Pokemon = (props) => {
  const [imagem, setImagem] = useState();
  const pokemonName = props.pokemonName; //Essa variavel armazena os nomes que será utilizada na variavel abaixo.
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`; //Aqui são os links que serão utilizados pela requisição abaixo.

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados da Api");
        }
        const data = await response.json();
        setImagem(data.sprites.front_default);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  });

  return (
    <div>
      <img src={imagem} alt="" />
    </div>
  );
};

export default Pokemon;
