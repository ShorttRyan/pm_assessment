import { useContext } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import CharacterSheet from "../CharacterSheet/CharacterSheet";

const CharacterList = () => {
  // obviously I would use some sort of ID here as key instead of index.
  const { characters } = useContext(CharactersContext);
  if (!characters || characters?.length === 0) {
    return <></>;
  }
  return (
    <div>
      {characters?.map((_, index) => (
        <CharacterSheet characterNum={index} key={index} />
      ))}
    </div>
  );
};

export default CharacterList;
