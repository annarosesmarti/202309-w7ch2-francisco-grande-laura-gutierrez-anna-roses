import { render } from "@testing-library/react";
import CharacterCard from "./CharacterCard.js";

describe("Given Luke Skywalker", () => {
  const characterData = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    creationDate: "1977-05-25",
    image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
    id: 1,
  };

  describe("When its functions renders its character information", () => {
    test("Then it should render Luke Skywalker's information", () => {
      const { getByText, getByAltText } = render(
        <CharacterCard characters={characterData} />,
      );
      expect(getByText("Name: Luke Skywalker")).toBeInTheDocument();
      expect(getByText("Height: 172")).toBeInTheDocument();
      expect(getByText("Mass: 77")).toBeInTheDocument();
      expect(getByText("Creation Date: 1977-05-25")).toBeInTheDocument();
      expect(getByAltText("This character is called 1")).toBeInTheDocument();
    });
  });
});
