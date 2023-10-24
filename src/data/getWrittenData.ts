import { CharacterStructure } from "../types"

  const getWrittenData = async (urlApi: string): Promise<CharacterStructure> => {
    const response = await fetch(urlApi);
    const characterWrittenList = (await response.json()) as CharacterStructure

    return characterWrittenList
  }


export default getWrittenData
