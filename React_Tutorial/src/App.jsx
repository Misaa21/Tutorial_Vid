import List from './List';

function App() {
  const games = [
      {id: 1, name: "Valorant", timeplayed: 1561}, 
      {id: 2,name: "LoL", timeplayed: 6000},
      {id: 3,name: "Dota 2", timeplayed: 2546},
      {id: 4,name: "Elden Ring", timeplayed: 100}, 
      {id: 5,name: "Minecraft", timeplayed: 3235}];

    const sportgames = [
      {id: 6, name: "BasketBall", timeplayed: 8000}, 
      {id: 7,name: "Volleyball", timeplayed: 7884},
      {id: 8,name: "Soccer", timeplayed: 9352},
      {id: 9,name: "Badminton", timeplayed: 4521}, 
      {id: 10,name: "Tennis", timeplayed: 4681}];



  return (
    <>
    <List items={games} category= "Games"/>
    <List items={sportgames} category= "Sports Game"/>
    </>
  
);
}

export default App
