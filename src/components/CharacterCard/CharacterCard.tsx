import React from "react";
import { CharacterStructure } from "../../types.js";
import "./CharacterCard.css";

interface CharacterProps {
  characters: CharacterStructure;
  image: number;
}

const CharacterCard = ({
  characters: { id, name, height, mass, created: creationDate },
}: CharacterProps): React.ReactElement => {
  return (
    <div className="card-container">
      <span className="card__item">Name: {name}</span>
      <ul className="card">
        <li className="card__item">Height: {height}</li>
        <li className="card__item">Mass: {mass}</li>
        <li className="card__item">Creation date: {creationDate}</li>
        <img
          className="card__item card__item--image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt=""
          width="288"
          height="320"
        />
        <button className="card__item card__button">Increase mass</button>
        <button className="card__item card__button">Decrease mass</button>
      </ul>
    </div>
  );
};

export default CharacterCard;
