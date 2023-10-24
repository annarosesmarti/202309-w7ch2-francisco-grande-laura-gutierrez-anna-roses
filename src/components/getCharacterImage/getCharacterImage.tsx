interface CharacterImageProps {
  characterId: number;
};

function getImageData({ characterId, altText }: CharacterImageProps): JSX.Element {
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;

  return <img src={ imageUrl } alt={ `This character is ${characterId}` className="character_image" } />;
};

export default getImageData;
