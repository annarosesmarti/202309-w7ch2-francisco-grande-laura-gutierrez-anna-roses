export interface CharacterImageProps {
  characterId: number;
  altText?: string;
}

function getCharacterImage({ characterId }: CharacterImageProps): JSX.Element {
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;

  return (
    <img
      src={imageUrl}
      alt={`This character's ID is ${characterId}`}
      className="character_image"
    />
  );
}

export default getCharacterImage;
