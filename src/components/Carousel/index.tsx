import { CarouselProps } from '../../types';

const Carousel = ({ images }: CarouselProps) => {
  console.log(images);
  if (!images || images.length === 0) {
    throw new Error('Carousel component requires images prop');
  }
  return (
    <div>
      <h1>Carousel</h1>
    </div>
  );
};

export default Carousel;
