import Button from "../Button/Button";
import CharacterList from "../CharacterList/CharacterList";

const App = (): React.ReactElement => {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1 className="main-header__title">STAR WARS</h1>
        <Button
          className="button__reset-mass"
          actionOnClick={() => {}}
          text="Reset mass"
        />
        <CharacterList />
      </header>
    </div>
  );
};

export default App;
