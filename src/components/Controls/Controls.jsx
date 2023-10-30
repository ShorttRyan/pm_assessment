import { useContext } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";

const Controls = () => {
  const { addCharacter, saveChanges } = useContext(CharactersContext);

  return (
    <div>
      <div>
        <button onClick={addCharacter}>Add character</button>
        <button onClick={saveChanges}>Save Changes</button>
      </div>
    </div>
  );
};

export default Controls;
