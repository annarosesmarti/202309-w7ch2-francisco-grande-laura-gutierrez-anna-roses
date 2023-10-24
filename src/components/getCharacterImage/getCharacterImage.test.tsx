import { render, RenderResult } from "@testing-library/react";
import CharacterImage from "./getCharacterImage";

describe("Given Luke SkyWalker with id 1", () => {
  const characterId = 1;
  const altText = "Luke Skywalker";

  describe("When rendering the CharacterImage component", () => {
    let imageElement: RenderResult;

    beforeEach(() => {
      imageElement = render(
        <CharacterImage characterId={characterId} altText={altText} />,
      );
    });

    test("Then it should render the image with its correct alternative text", () => {
      expect(imageElement.getByAltText(altText)).toBeInTheDocument();
    });

    test("Then it should render the image of Luke SkyWalker with the correct src attribute", () => {
      expect(imageElement.getByAltText(altText)).toHaveAttribute(
        "src",
        `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`,
      );
    });
  });
});

describe("Given a characterId without an alternative text", () => {
  const characterId = 2;

  describe("When rendering the CharacterImage component", () => {
    let imageElement: RenderResult;

    beforeEach(() => {
      imageElement = render(<CharacterImage characterId={characterId} />);
    });

    test("Then it should render an image with the default alternative text", () => {
      expect(
        imageElement.getByAltText(`This character is ${characterId}`),
      ).toBeInTheDocument();
    });

    test("Then it should render an image with the correct src attribute", () => {
      expect(
        imageElement.getByAltText(`Character ${characterId}`),
      ).toHaveAttribute(
        "src",
        `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`,
      );
    });
  });
});
