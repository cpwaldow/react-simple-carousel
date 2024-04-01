import { CarouselProps } from './types';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselComponent = ({ images }: CarouselProps) => {
  if (!images || images.length === 0) {
    throw new Error('Carousel component requires images prop');
  }
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={`${image} - ${index}`}>
          <img className='d-block w-100' src={image} alt='First slide' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
