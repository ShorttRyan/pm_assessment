import React, { createContext, useState, useEffect } from "react"
import axios from 'axios';
import { BASE_CHARACTER } from "../consts";

export const CharactersContext = createContext({
  characters: [],
})

/*

  Character Type:

  Currently indexing by position, we could do it by name and make characters a json.

  {
    "Strength": num,
    "Dexterity": num,
    "Constitution": num,
    "Intelligence": num,
    "Wisdom": num,
    "Charisma": num,
    "TotalBaseAttributes": int,
    "Skill": string,
  }

*/

export const CharactersContextProvider = ({children}) => {
  const [characters, setCharacters] = useState([]);


  const increaseAttribute = (characterNum, attribute) => {
    if (characterNum < 0 || characterNum >= characters.length) {
      // provided an invalid characterNum
      return;
    }
    const currentCharacter = characters[characterNum];
    if (currentCharacter.TotalBaseAttributes >= 70) {
      // Attempted to go over the maximum total base attribute number
      return;
    }
    currentCharacter[attribute] = currentCharacter[attribute] + 1;
    currentCharacter.TotalBaseAttributes = currentCharacter.TotalBaseAttributes + 1;
    setCharacters((curr) => {
      const newCharacters = [...curr];
      newCharacters[characterNum] = currentCharacter;
      return newCharacters;
    });
  };

  const decreaseAttribute = (characterNum, attribute) => {
    if (characterNum < 0 || characterNum >= characters.length) {
      // provided an invalid characterNum
      return;
    }
    const currentCharacter = characters[characterNum];
    if (currentCharacter[attribute] <= 0) {
      // Attempted to go below 0
      return;
    }
    currentCharacter[attribute] = currentCharacter[attribute] - 1;
    currentCharacter.TotalBaseAttributes = currentCharacter.TotalBaseAttributes - 1;
    setCharacters((curr) => {
      const newCharacters = [...curr];
      newCharacters[characterNum] = currentCharacter;
      return newCharacters;
    });
  };

  const addCharacter = () => {
    setCharacters((curr) => [...curr, BASE_CHARACTER]);
  }

  const saveChanges = async () => {
    try {
      await axios({
        method: 'post',
        url: 'https://recruiting.verylongdomaintotestwith.ca/api/ShorttRyan/character',
        data: {
          Characters: characters,
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const loadCharacters = async () => {
    try {
      const result = await axios({
        method: 'get',
        url: 'https://recruiting.verylongdomaintotestwith.ca/api/ShorttRyan/character',
      });
      setCharacters(result.data.body.Characters);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadCharacters();
  },[])

  return (
    <CharactersContext.Provider
      value={{
        characters,
        increaseAttribute,
        decreaseAttribute,
        addCharacter,
        saveChanges,
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}
