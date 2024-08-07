const App = () => {
  enum Berrys {
    Strawberry = "strawberry",
    Raspberry = "raspberry",
    Blueberry = "blueberry",
  }

  type RedBerry = Berrys.Raspberry | Berrys.Strawberry;

  var berry: RedBerry = Berrys.Raspberry; // error
  var berry2: RedBerry = Berrys.Strawberry; // error

  console.log(berry);
  console.log(berry2);
  return <div>App</div>;
};

export default App;
