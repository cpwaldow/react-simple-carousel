import Carousel from './components/Carousel';

function App() {
  const imgs = [
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_2.jpg',
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_3.jpg',
  ];
  return (
    <div>
      <Carousel images={imgs} />
    </div>
  );
}

export default App;
