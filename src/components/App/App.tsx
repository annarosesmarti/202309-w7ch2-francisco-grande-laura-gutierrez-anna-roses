import CharacterCard from "../CharacterCard/CharacterCard";

const App = (): React.ReactElement => {
  const Lucke = {
    id: 1,
    name: "Lucke",
    image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
    height: "1,70m",
    mass: "77",
    creationDate: "2014",
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <h1 className="main-header__title">STAR WARS</h1>
        <button className="button__delete-mass">delete mass</button>
        <CharacterCard characters={Lucke} />
      </header>
    </div>
  );
};

export default App;
