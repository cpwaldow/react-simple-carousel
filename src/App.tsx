import Carousel from './components/Carousel';

function App() {
  const imgs = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];
  return (
    <div>
      <Carousel images={imgs} />
    </div>
  );
}

export default App;
