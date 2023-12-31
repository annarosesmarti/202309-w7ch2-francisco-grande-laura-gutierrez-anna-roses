import { useEffect, useState } from "react";
import { CharacterStructure } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

interface CharacterProps {
  id: number;
  name: string;
  height: string;
  mass: string;
  created: string;
  image: string;
}

const CharacterList = (): React.ReactElement => {
  const [list, setList] = useState<CharacterStructure[]>([]);

  useEffect(() => {
    const getCharacterData = async () => {
      const urlApi = "https://starwars-characters-api-qcun.onrender.com/characters"
      const response = await fetch(urlApi);
      const characterData = (await response.json()) as CharacterProps[]
      setList(characterData)}
      
      getCharacterData()
  }, []);

  return (
    <div>
      <ul className="list-container">
        {list.map((character, position): React.ReactElement => (
          <li key={position}>
            <CharacterCard characters={character} image={0} />
          </li>
          )
        )}
      </ul>
    </div>
  )
}

export default CharacterList
