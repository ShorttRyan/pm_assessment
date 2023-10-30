import { useContext, useState } from "react";
import "./CharacterSheet.css";
import { CharactersContext } from "../../contexts/CharactersContext";
import { getModifier, classCheck, CLASS_LIST } from "../../consts";

const CharacterSheet = ({ characterNum }) => {
  const [classMinimums, setClassMinimums] = useState(null);
  const { characters, increaseAttribute, decreaseAttribute } =
    useContext(CharactersContext);
  const character = characters[characterNum];
  const { Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma } =
    character;

  const isBarbarian = classCheck(character, "Barbarian");
  const isWizard = classCheck(character, "Wizard");
  const isBard = classCheck(character, "Bard");

  const onClassClick = (className) => {
    setClassMinimums(className === classMinimums ? null : className);
  };

  return (
    <div>
      <div>
        <h3>Character: {characterNum + 1}</h3>
      </div>
      <div className="sheetBody">
        <div>
          <h4>Attributes</h4>
          <div className="attributeRow">
            Strength: {Strength}
            <div>(Modifier: {getModifier(Strength)})</div>
            <button onClick={() => increaseAttribute(characterNum, "Strength")}>
              +
            </button>
            <button onClick={() => decreaseAttribute(characterNum, "Strength")}>
              -
            </button>
          </div>
          <div className="attributeRow">
            Dexterity: {Dexterity}
            <div>(Modifier: {getModifier(Dexterity)})</div>
            <button
              onClick={() => increaseAttribute(characterNum, "Dexterity")}
            >
              +
            </button>
            <button
              onClick={() => decreaseAttribute(characterNum, "Dexterity")}
            >
              -
            </button>
          </div>
          <div className="attributeRow">
            Constitution: {Constitution}
            <div>(Modifier: {getModifier(Constitution)})</div>
            <button
              onClick={() => increaseAttribute(characterNum, "Constitution")}
            >
              +
            </button>
            <button
              onClick={() => decreaseAttribute(characterNum, "Constitution")}
            >
              -
            </button>
          </div>
          <div className="attributeRow">
            Intelligence: {Intelligence}
            <div>(Modifier: {getModifier(Intelligence)})</div>
            <button
              onClick={() => increaseAttribute(characterNum, "Intelligence")}
            >
              +
            </button>
            <button
              onClick={() => decreaseAttribute(characterNum, "Intelligence")}
            >
              -
            </button>
          </div>
          <div className="attributeRow">
            Wisdom: {Wisdom}
            <div>(Modifier: {getModifier(Wisdom)})</div>
            <button onClick={() => increaseAttribute(characterNum, "Wisdom")}>
              +
            </button>
            <button onClick={() => decreaseAttribute(characterNum, "Wisdom")}>
              -
            </button>
          </div>
          <div className="attributeRow">
            Charisma: {Charisma}
            <div>(Modifier: {getModifier(Charisma)})</div>
            <button onClick={() => increaseAttribute(characterNum, "Charisma")}>
              +
            </button>
            <button onClick={() => decreaseAttribute(characterNum, "Charisma")}>
              -
            </button>
          </div>
        </div>
        <div>
          <h4>Classes</h4>
          <button
            onClick={() => onClassClick("Barbarian")}
            className={isBarbarian ? "red" : ""}
          >
            Barbarian
          </button>
          <button
            onClick={() => onClassClick("Wizard")}
            className={isWizard ? "red" : ""}
          >
            Wizard
          </button>
          <button
            onClick={() => onClassClick("Bard")}
            className={isBard ? "red" : ""}
          >
            Bard
          </button>
          {classMinimums && (
            <>
              <div>
                <div>Strength: {CLASS_LIST[classMinimums].Strength} </div>
                <div>Dexterity: {CLASS_LIST[classMinimums].Dexterity} </div>
                <div>
                  Constitution: {CLASS_LIST[classMinimums].Constitution}
                </div>
                <div>
                  Intelligence: {CLASS_LIST[classMinimums].Intelligence}
                </div>
                <div>Wisdom: {CLASS_LIST[classMinimums].Wisdom} </div>
                <div>Charisma: {CLASS_LIST[classMinimums].Charisma} </div>
              </div>
            </>
          )}
        </div>
        <div>
          <h4>Skills</h4>
          <div>Acrobatics</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
