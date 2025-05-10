
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const PhotoGallery: React.FC = () => {
  // Sample gallery data - this can be replaced with real data later
  const galleries = [
    {
      id: 'recent-events',
      title: 'अलीकडील कार्यक्रम',
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3",
          alt: "सकल मराठा परिवार कार्यक्रम",
          caption: "वार्षिक मेळावा २०२४"
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3",
          alt: "सकल मराठा परिवार कार्यक्रम",
          caption: "समाजसेवा शिबिर"
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3",
          alt: "सकल मराठा परिवार कार्यक्रम",
          caption: "शैक्षणिक कार्यशाळा"
        }
      ]
    },
    {
      id: 'charitable-events',
      title: 'सेवाकार्य कार्यक्रम',
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3",
          alt: "सकल मराठा परिवार सेवाकार्य",
          caption: "आरोग्य शिबिर"
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3",
          alt: "सकल मराठा परिवार सेवाकार्य",
          caption: "रक्तदान शिबिर"
        }
      ]
    }
  ];

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
          
          <Tabs defaultValue="recent-events" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {galleries.map((gallery) => (
                  <TabsTrigger key={gallery.id} value={gallery.id} className="px-6">
                    {gallery.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {galleries.map((gallery) => (
              <TabsContent key={gallery.id} value={gallery.id}>
                <h2 className="text-2xl font-bold mb-6 text-center">{gallery.title}</h2>
                
                {/* Large screens display grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {gallery.images.map((image) => (
                    <Card key={image.id} className="overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3">
                            <p className="text-center">{image.caption}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Mobile carousel */}
                <div className="md:hidden">
                  <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                      {gallery.images.map((image) => (
                        <CarouselItem key={image.id}>
                          <Card className="overflow-hidden">
                            <CardContent className="p-0">
                              <div className="relative">
                                <img 
                                  src={image.src} 
                                  alt={image.alt} 
                                  className="w-full h-64 object-cover" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3">
                                  <p className="text-center">{image.caption}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <CarouselPrevious className="static transform-none mx-2" />
                      <CarouselNext className="static transform-none mx-2" />
                    </div>
                  </Carousel>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PhotoGallery;
