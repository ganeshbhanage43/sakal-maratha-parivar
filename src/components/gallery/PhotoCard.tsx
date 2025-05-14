
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { GalleryImage } from '@/data/galleryData';

interface PhotoCardProps {
  image: GalleryImage;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ image }) => {
  return (
    <Card className="overflow-hidden group h-full">
      <CardContent className="p-0 h-full">
        <div className="relative h-full">
          <AspectRatio ratio={4/3} className="bg-muted">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </AspectRatio>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3">
            <p className="text-center">{image.caption}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
