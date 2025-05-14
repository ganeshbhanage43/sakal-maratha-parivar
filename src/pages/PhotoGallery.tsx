
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { galleryData } from '@/data/galleryData';
import GalleryCategoryComponent from '@/components/gallery/GalleryCategory';

const PhotoGallery: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="container-custom py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">छायाचित्र गॅलरी</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              सकल मराठा परिवारच्या विविध कार्यक्रमांचे क्षणचित्र इथे पाहा. आमच्या कामाची झलक आणि समाजासाठी आमची प्रतिबद्धता या छायाचित्रांमधून दिसून येते.
            </p>
          </div>
          
          <Tabs defaultValue="events" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="flex flex-nowrap">
                {galleryData.map((gallery) => (
                  <TabsTrigger 
                    key={gallery.id} 
                    value={gallery.id} 
                    className="px-4 md:px-6 whitespace-nowrap flex items-center gap-2"
                  >
                    {gallery.icon}
                    {gallery.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {galleryData.map((gallery) => (
              <GalleryCategoryComponent key={gallery.id} category={gallery} />
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PhotoGallery;
