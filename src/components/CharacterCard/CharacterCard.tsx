import React from "react";
import { CharacterStructure } from "../../types.js";
import "./CharacterCard.css";

interface CharacterProps {
  characters: CharacterStructure;
}

const CharacterCard = ({
  characters: { name, height, mass, creationDate, image },
}: CharacterProps): React.ReactElement => {
  return (
    <ul className="card">
      <li className="card__item card__name">Name: {name}</li>
      <li className="card__item card__height">Height: {height}</li>
      <li className="card__item card__mass">Mass: {mass}</li>
      <li className="card__item card__creation">
        Creation Date: {creationDate}
      </li>
      <img
        className="card__item card__item--image"
        src={image}
        alt="Image of the character"
      />
      <button className="card__item card__button">Increase mass</button>
      <button className="card__item card__button">Decrease mass</button>
    </ul>
  );
};

export default CharacterCard;
