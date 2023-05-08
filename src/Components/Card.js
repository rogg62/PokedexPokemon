import React from "react";
import ActionAreaCard from "./CardsPrincipal";
import Kanto from "../Assets/Kanto Route 1.jpeg"
import Johto from "../Assets/Jhoto Reigon.jpeg"
import Hoenn from"../Assets/download.jpeg"
const Card1 = () => {
  return (
    <ActionAreaCard
      title="Kanto"
      info="A primeira geração de Pokémon, também conhecida como 'Pokémon Red and Green' (Japão) ou 'Pokémon Red and Blue' (internacionalmente), se passa na região fictícia de Kanto. Alguns dos lugares icônicos da região incluem a cidade de Pallet, as cidades de Pewter, Cerulean e Vermilion, a Rota da Vitória e a Liga Pokémon. A primeira geração apresenta 151 Pokémon diferentes, incluindo os icônicos Pikachu, Charizard e Mewtwo"
      img={Kanto}
    />
  );
};

const Card2 = () => {
  return (
    <ActionAreaCard
      title=" Johto"
      info="A segunda geração de Pokémon se passa na região fictícia de Johto. Johto é uma região vizinha à região de Kanto, a segunda geração de Pokémon foi muito bem recebida, expandindo o universo Pokémon e adicionando novos recursos que se tornaram marcos na franquia. Ela também introduziu 100 novos Pokémon, além dos 151 da primeira geração, totalizando 251 Pokémon disponíveis para capturar e treinar."
      img={Johto}
    />
  );
};

const Card3 = () => {
  return (
    <ActionAreaCard
      title=" Hoenn"
      info="A terceira geração de Pokémon se passa na região fictícia de Hoenn. A terceira geração de Pokémon trouxe algumas inovações significativas para a série. Também houve um grande aumento no número de Pokémon, com a terceira geração apresentando 135 novos Pokémon, totalizando 386 no total. Dentre os Pokémon icônicos dessa geração estão Treecko, Torchic, Mudkip, Rayquaza e Blaziken, entre outros."
      img={Hoenn}
    />
  );
};

export { Card1, Card2, Card3 };
