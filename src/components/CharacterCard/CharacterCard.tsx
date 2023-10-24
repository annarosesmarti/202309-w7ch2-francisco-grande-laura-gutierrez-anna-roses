import React from "react";
import { CharacterStructure } from "../types";
import "./CharacterCard.css";

interface CharacterProps {
  characters: CharacterStructure;
}

const CharacterCard = ({
  characters: { name, height, mass, creationDate, image },
}: CharacterProps): React.ReactElement => {
  return (
    <ul className="card">
      <li className="card__item">Name: {name}</li>
      <li className="card__item">Height: {height}</li>
      <li className="card__item">Mass: {mass}</li>
      <li className="card__item">Creation Date: {creationDate}</li>
      <img className="card__item card__item--image" src={image} alt="" />
    </ul>
  );
};

export default CharacterCard;
