import React from "react";
import { CharacterStructure } from "../../types.js";
import "./CharacterCard.css";
import getCharacterImage, {
  CharacterImageProps,
} from "../getCharacterImage/getCharacterImage.js";

interface CharacterProps {
  characters: CharacterStructure;
}

const CharacterCard = ({
  characters: { name, height, mass, creationDate, image },
}: CharacterProps): React.ReactElement => {
  const characterIdMatch = image.match(/(\d+)/);
  const characterId = characterIdMatch ? parseInt(characterIdMatch[0], 10) : 0;

  const charachterImageProps: CharacterImageProps = {
    characterId,
    altText: name,
  };

  const characterImage = getCharacterImage(charachterImageProps);

  return (
    <ul className="card">
      <li className="card__item">Name: {name}</li>
      <li className="card__item">Height: {height}</li>
      <li className="card__item">Mass: {mass}</li>
      <li className="card__item">Creation Date: {creationDate}</li>
      {characterImage}
    </ul>
  );
};

export default CharacterCard;
