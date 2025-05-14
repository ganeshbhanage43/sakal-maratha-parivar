
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { GalleryCategory } from '@/data/galleryData';
import PhotoGrid from './PhotoGrid';
import PhotoCarousel from './PhotoCarousel';

interface GalleryCategoryProps {
  category: GalleryCategory;
}

const GalleryCategoryComponent: React.FC<GalleryCategoryProps> = ({ category }) => {
  return (
    <TabsContent value={category.id}>
      <h2 className="text-2xl font-bold mb-6 text-center">{category.title}</h2>
      <PhotoGrid images={category.images} />
      <PhotoCarousel images={category.images} />
    </TabsContent>
  );
};

export default GalleryCategoryComponent;
