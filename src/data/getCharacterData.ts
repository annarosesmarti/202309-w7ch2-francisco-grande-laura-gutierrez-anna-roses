import { CharacterStructure } from "../types"


const getCharacterData = async (): Promise<CharacterStructure> => {
    const urlApi = "https://swapi.dev/api/people/"
    const response = await fetch(urlApi);
    const characterData = (await response.json()) as CharacterStructure

    return characterData
  }

export default getCharacterData
