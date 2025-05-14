
import React from 'react';
import { GalleryImage } from '@/data/galleryData';
import PhotoCard from './PhotoCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

interface PhotoCarouselProps {
  images: GalleryImage[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images }) => {
  return (
    <div className="md:hidden">
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <PhotoCard image={image} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-4">
          <CarouselPrevious className="static transform-none mx-2" />
          <CarouselNext className="static transform-none mx-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
