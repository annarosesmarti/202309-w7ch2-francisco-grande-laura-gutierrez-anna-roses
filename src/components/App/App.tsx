import CharacterList from "../CharacterList/CharacterList";

const App = (): React.ReactElement => {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1 className="main-header__title">STAR WARS</h1>
        <button className="button__delete-mass">delete mass</button>
        <CharacterList />
      </header>
    </div>
  );
};

export default App;
