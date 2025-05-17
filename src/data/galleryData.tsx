import React from 'react';
import { ImageIcon, ImagesIcon } from 'lucide-react';

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  images: GalleryImage[];
}

export const galleryData: GalleryCategory[] = [
  {
    id: 'events',
    title: 'सामाजिक कार्यक्रम',
    icon: <ImageIcon className="h-5 w-5" />,
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
      },
      {
        id: 5,
        src: "/lovable-uploads/8c9c689d-78d5-4fb1-9af3-27279320de7d.png",
        alt: "राजमाता जिजाऊ जन्मोत्सव निमित्त कार्यक्रम",
        caption: "राजमाता जिजाऊ जन्मोत्सव निमित्त कार्यक्रम"
      },
      {
        id: 6,
        src: "/lovable-uploads/737b7cfe-70f8-4bb7-b308-6dc971c73453.png",
        alt: "ऑनलाईन चित्रकला व वक्तृत्व स्पर्धा",
        caption: "छत्रपति शिवाजी महाराज जयंती निमित्त ऑनलाईन चित्रकला व वक्तृत्व स्पर्धा"
      },
      {
        id: 7,
        src: "/lovable-uploads/8c421ff2-a487-49f8-a635-e32ad59152f6.png",
        alt: "सकल मराठा परिवार कार्यक्रम",
        caption: "सभागृह में सकल मराठा परिवार का विशेष कार्यक्रम"
      }
    ]
  },
  {
    id: 'charity',
    title: 'सेवाकार्य कार्यक्रम',
    icon: <ImagesIcon className="h-5 w-5" />,
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
      },
      {
        id: 5,
        src: "/lovable-uploads/42f3cfe9-68fe-4863-929a-04a0987305c8.png",
        alt: "रक्तदान कार्यक्रम",
        caption: "सकल मराठा परिवार रक्तदान कार्यक्रम"
      }
    ]
  },
  {
    id: 'members',
    title: 'सदस्य व प्रतिनिधी',
    icon: <ImagesIcon className="h-5 w-5" />,
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
      },
      {
        id: 5,
        src: "/lovable-uploads/12b6063e-6f94-4bf3-8458-abb10abf022b.png",
        alt: "सकल मराठा परिवार प्रमाणपत्र वितरण",
        caption: "सकल मराठा परिवार प्रमाणपत्र वितरण समारोह"
      }
    ]
  },
  {
    id: 'social-work',
    title: 'समाज सहायता कार्य',
    icon: <ImagesIcon className="h-5 w-5" />,
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
      },
      {
        id: 5,
        src: "/lovable-uploads/0eabfb54-9bb9-4e7f-a73e-af7f1d67511d.png",
        alt: "शिष्यवृत्ती वितरण कार्यक्रम",
        caption: "सकल मराठा परिवार शिष्यवृत्ती वितरण कार्यक्रम"
      }
    ]
  },
  {
    id: 'community',
    title: 'सांस्कृतिक कार्यक्रम',
    icon: <ImagesIcon className="h-5 w-5" />,
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
