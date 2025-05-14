
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
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Gallery, Images } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  // Gallery data with uploaded images
  const galleries = [
    {
      id: 'events',
      title: 'सामाजिक कार्यक्रम',
      icon: <Gallery className="h-5 w-5" />,
      images: [
        {
          id: 1,
          src: "/lovable-uploads/ce8c45b4-5ad1-417c-bf23-8f3ac02558ad.png",
          alt: "राजमाता जिजाऊ जन्मोत्सव कार्यक्रम",
          caption: "राजमाता जिजाऊ जन्मोत्सव कार्यक्रम"
        },
        {
          id: 2,
          src: "/lovable-uploads/88956e2c-fc24-434d-b54d-bb46a5249d36.png",
          alt: "सभागृह में आयोजित कार्यक्रम",
          caption: "सभागृह में सकल मराठा परिवार कार्यक्रम"
        },
        {
          id: 3,
          src: "/lovable-uploads/ca5157a7-3b0b-4ddc-9615-2c4e6178a58e.png",
          alt: "सकल मराठा परिवार मोर्चा",
          caption: "सकल मराठा परिवार संघटन"
        },
        {
          id: 4,
          src: "/lovable-uploads/fda3ceef-e6cc-4008-85e1-6d437127f784.png",
          alt: "शिवाजी महाराज जयंती चित्रकला स्पर्धा",
          caption: "छत्रपति शिवाजी महाराज जयंती निमित्त ऑनलाईन चित्रकला व वक्तृत्व स्पर्धा"
        }
      ]
    },
    {
      id: 'charity',
      title: 'सेवाकार्य कार्यक्रम',
      icon: <Images className="h-5 w-5" />,
      images: [
        {
          id: 1,
          src: "/lovable-uploads/8bda6285-977c-4330-8020-8ebbb656fae8.png",
          alt: "रक्तदान शिबिर",
          caption: "सकल मराठा परिवार रक्तदान शिबिर"
        },
        {
          id: 2,
          src: "/lovable-uploads/4bef273c-f493-438d-810e-b88f00356c91.png",
          alt: "रक्तदान शिबिर",
          caption: "सकल मराठा परिवार, लातूर द्वारा रक्तदान शिबिर"
        },
        {
          id: 3,
          src: "/lovable-uploads/a7b6e484-3fe5-499c-97d5-7603005dac0c.png",
          alt: "महा आरोग्य शिबिर",
          caption: "सकल मराठा परिवार पुणे जिल्हा आयोजित महा आरोग्य शिबिर"
        },
        {
          id: 4,
          src: "/lovable-uploads/851068df-0ca5-426f-80aa-fbce73973b9a.png",
          alt: "अँबुलन्स सेवा",
          caption: "सकल मराठा परिवार अँबुलन्स सेवा"
        }
      ]
    },
    {
      id: 'members',
      title: 'सदस्य व प्रतिनिधी',
      icon: <Images className="h-5 w-5" />,
      images: [
        {
          id: 1,
          src: "/lovable-uploads/17d72331-b3da-4aa6-b1b6-cdce9292951a.png",
          alt: "सकल मराठा परिवार प्रतिनिधी",
          caption: "सकल मराठा परिवार प्रतिनिधी"
        },
        {
          id: 2,
          src: "/lovable-uploads/7d108a91-513b-42ab-ad7f-dffbc508fc86.png",
          alt: "सकल मराठा परिवार समारोह",
          caption: "सकल मराठा परिवार कार्यकर्ते"
        },
        {
          id: 3,
          src: "/lovable-uploads/49cc94c8-d1c7-427a-87bd-bc48abf77d70.png",
          alt: "सकल मराठा परिवार सदस्य",
          caption: "सकल मराठा परिवार सदस्य"
        },
        {
          id: 4,
          src: "/lovable-uploads/f458a54c-ac79-4ef4-b4bc-ce58beda4eff.png",
          alt: "सकल मराठा परिवार प्रतिनिधी समारोह",
          caption: "प्रमाणपत्र वितरण कार्यक्रम"
        }
      ]
    },
    {
      id: 'social-work',
      title: 'समाज सहायता कार्य',
      icon: <Images className="h-5 w-5" />,
      images: [
        {
          id: 1,
          src: "/lovable-uploads/8b9c38b0-8312-4b20-8695-2397a76a157a.png",
          alt: "सामाजिक सहायता कार्य",
          caption: "आंध्र प्रदेश मध्ये झाली रहाण्याची सोय"
        },
        {
          id: 2,
          src: "/lovable-uploads/d6e18a85-81f7-4777-b5f0-5c5d6f1e9bee.png",
          alt: "सामाजिक सहायता",
          caption: "तेलंगणा मध्ये सामाजिक सहायता"
        },
        {
          id: 3,
          src: "/lovable-uploads/db00db9c-13e9-48e4-a57e-15b871734349.png",
          alt: "शैक्षणिक मदद",
          caption: "सकल मराठा परिवार शाळेतील विद्यार्थी"
        },
        {
          id: 4,
          src: "/lovable-uploads/e60b88e7-11b9-4555-8465-015064c09d91.png",
          alt: "शैक्षणिक कार्यक्रम",
          caption: "सकल मराठा परिवार शैक्षणिक कार्यक्रम"
        }
      ]
    },
    {
      id: 'community',
      title: 'सांस्कृतिक कार्यक्रम',
      icon: <Images className="h-5 w-5" />,
      images: [
        {
          id: 1,
          src: "/lovable-uploads/4e76dace-5d21-40db-8187-5fd32fbd3c24.png",
          alt: "सकल मराठा परिवार विद्यार्थी गुणगौरव",
          caption: "सकल मराठा परिवारातर्फे गुणवंत विद्यार्थ्यांचा गुणगौरव"
        },
        {
          id: 2,
          src: "/lovable-uploads/8905f000-0f83-49c3-9370-02fa3e8080ec.png",
          alt: "एक राखी माझ्या देशाच्या सैनिकासाठी",
          caption: "एक राखी माझ्या देशाच्या सैनिकासाठी उपक्रम"
        },
        {
          id: 3,
          src: "/lovable-uploads/461a4078-7808-41ec-b2e5-364c4a4f8dcd.png",
          alt: "मराठा समाज हिताच्या भूमिकेबद्दल",
          caption: "एकवेळ मराटा कडवा असावा पण समाज हिताला राजकीय पक्षाला जास्त महत्व देणारा भडवा नसावा"
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
          
          <Tabs defaultValue="events" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="flex flex-nowrap">
                {galleries.map((gallery) => (
                  <TabsTrigger key={gallery.id} value={gallery.id} className="px-4 md:px-6 whitespace-nowrap flex items-center gap-2">
                    {gallery.icon}
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
                    <Card key={image.id} className="overflow-hidden group h-full">
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
                  ))}
                </div>
                
                {/* Mobile carousel */}
                <div className="md:hidden">
                  <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                      {gallery.images.map((image) => (
                        <CarouselItem key={image.id}>
                          <Card className="overflow-hidden h-full">
                            <CardContent className="p-0 h-full">
                              <div className="relative">
                                <AspectRatio ratio={4/3} className="bg-muted">
                                  <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    className="w-full h-full object-cover" 
                                  />
                                </AspectRatio>
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
