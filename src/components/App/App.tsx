import Button from "../Button/Button";
import CharacterList from "../CharacterList/CharacterList";
import "../Button/Button.css";
import { useState } from "react";

const App = (): React.ReactElement => {
  const [number, setNumber] = useState(0);

  const resetMass = () => {
    if (number >= 1) {
      return;
    }

    setNumber(0);
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <h1 className="main-header__title">STAR WARS</h1>
        <Button
          className="card__button"
          actionOnClick={resetMass}
          text="Reset mass"
        />
        <CharacterList />
      </header>
    </div>
  );
};

export default App;
