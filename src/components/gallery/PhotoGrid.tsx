
import React from 'react';
import { GalleryImage } from '@/data/galleryData';
import PhotoCard from './PhotoCard';

interface PhotoGridProps {
  images: GalleryImage[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ images }) => {
  return (
    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {images.map((image) => (
        <PhotoCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default PhotoGrid;
