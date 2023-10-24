interface CharacterImageProps {
  characterId: number;
  altText?: string;
}

function getImageData({ characterId }: CharacterImageProps): JSX.Element {
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;

  return (
    <img
      src={imageUrl}
      alt={`This character is called ${characterId}`}
      className="character_image"
    />
  );
}

export default getImageData;
