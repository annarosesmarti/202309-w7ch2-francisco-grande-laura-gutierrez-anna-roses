import React from "react";
import { CharacterStructure } from "../../types.js";
import "./CharacterCard.css";
import Button from "../Button/Button.js";

interface CharacterProps {
  characters: CharacterStructure;
  image: number;
}

const CharacterCard = ({
  characters: { id, name, height, mass, created: creationDate },
}: CharacterProps): React.ReactElement => {
  return (
    <div className="card-container">
      <span className="card__item card__name">Name: {name}</span>
      <ul className="card">
        <li className="card__item">Height: {height}</li>
        <li className="card__item">Mass: {mass}</li>
        <li className="card__item">Creation date: {creationDate}</li>
        <li className="card__item">
          <img
            className="card__item--image"
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt=""
            width="288"
            height="320"
          />
        </li>
        <div>
          <Button
            className="card__button"
            actionOnClick={() => {}}
            text="Decrease mass"
          />
          <Button
            className="card__button"
            actionOnClick={() => {}}
            text="Increase mass"
          />
        </div>
      </ul>
    </div>
  );
};

export default CharacterCard;
