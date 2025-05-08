
import { BookOpen, Heart, Briefcase, Home, Store, Bell } from 'lucide-react';

export interface Testimonial {
  name: string;
  quote: string;
  role: string;
  image: string;
}

export interface ServiceData {
  id: string;
  title: string;
  icon: any;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  image: string;
  ctaText: string;
  ctaLink: string;
  testimonials: Testimonial[];
}

export const servicesData: ServiceData[] = [
  {
    id: "education",
    title: "शिक्षण क्षेत्र",
    icon: BookOpen,
    shortDescription: "महाराष्ट्र सरकार स्थापित स्वायत्त संस्था म्हणून सारथी संस्थेकडून शैक्षणिक क्षेत्रात जे उपक्रम राबविले जातात, ते सर्व उपक्रम तळागाळातील मराठा विद्यार्थ्यांपर्यंत पोहोचविण्याचे काम SMP प्रतिनिधी यांच्याकडून केले जाते.\n\nयामध्ये प्रामुख्याने खालील महत्त्वाचे उपक्रम मोठया प्रमाणात राबविण्याचा प्रयत्न केला जातो:\n\n• स्पर्धा परीक्षा क्लासेस (MPSC/UPSC/Banking/SSC)\n• Defence exam मार्गदर्शन कार्यक्रम (NDA, Navy, इत्यादी)\n• विविध प्रकारच्या शाळा, कॉलेज व पी.एच.डी. स्तरावरील शिष्यवृत्ती योजना\n• परदेशी शिक्षण शिष्यवृत्ती योजना\n• मराठा तरुण कौशल्य विकास कार्यक्रम",
    fullDescription: "Our education support program aims to break the cycle of poverty through quality education. We work with underprivileged communities to provide access to educational resources, qualified mentors, and scholarship opportunities. Our approach is holistic, addressing not just academic needs but also providing emotional support and life skills training.",
    benefits: [
      "Access to quality learning materials and resources",
      "One-on-one mentoring with qualified educators",
      "Scholarship opportunities for higher education",
      "Career guidance and counseling",
      "Computer literacy and digital skills training",
      "After-school programs and homework assistance"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ctaText: "अधिक माहिती",
    ctaLink: "/contact?service=education",
    testimonials: [
      {
        name: "Sarah Johnson",
        quote: "The scholarship I received changed my life. I'm the first in my family to attend college, and I wouldn't have been able to do it without Empower NGO's support.",
        role: "University Student",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      {
        name: "Michael Chen",
        quote: "The mentoring program helped me improve my grades and build confidence. My mentor didn't just help with academics but taught me important life skills too.",
        role: "High School Student",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      {
        name: "Priya Patel",
        quote: "As a parent, I've seen remarkable changes in my daughter since she joined the after-school program. Her confidence has grown, and she's so excited about learning now.",
        role: "Parent",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
      }
    ]
  },
  {
    id: "healthcare",
    title: "आरोग्य क्षेत्र",
    icon: Heart,
    shortDescription: "सकल मराठा परिवार टीम मेडिकल क्षेत्रामध्ये गेल्या 4 वर्षांपासून कार्यरत आहे. यामध्ये जिल्हा आणि तालुका स्तरावर घेतली जाणारी रक्तदान शिबीरे, वृद्धांसाठी आरोग्य शिबीरे (BP, डोळ्यांचे आजार व इतर मार्गदर्शन), दिव्यांग बांधवांना कृत्रिम अवयव उपलब्ध करून देणे, महाराष्ट्र च्या काना-कोपऱ्यात गोरगरीब लोकांचे ऑपेरेशन मोफत किंवा कमी खर्च मध्ये करून देणे, डिलीव्हरी केसेस, हॉस्पिटल चे बिल कमी करणे अशा अनेक गोष्टीमध्ये शक्य तेवढी (आर्थिक वगळता) मदत SMP टीम चे प्रतिनिधी करत असतात.\n\nCovid काळात पेशंटना बेड उपलब्ध करून देणे, औषधी/इंजेक्शन्स उपलब्ध करून देण्यात मदत करणे, ब्लड/प्लाझ्मा उपलब्ध करून देणे, मानसिक आधार, रुग्णांच्या नातेवाईकांना मोफत जेवण पुरवणे इत्यादी प्रकारची कामे SMP प्रतिनिधी कडून करण्यात आलेली आहेत.",
    fullDescription: "Access to healthcare is a fundamental right, yet many communities lack basic medical services. Our healthcare access program works to bridge this gap by connecting underserved populations with medical professionals, organizing health camps, providing preventive care education, and assisting with medical expenses for critical treatments.",
    benefits: [
      "Free health check-ups and screenings",
      "Connection to affordable medical services",
      "Health education and awareness programs",
      "Preventive care workshops",
      "Mental health support and counseling",
      "Assistance with medical expenses for critical treatments"
    ],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ctaText: "Access Healthcare Services",
    ctaLink: "/contact?service=healthcare",
    testimonials: [
      {
        name: "Robert Wilson",
        quote: "I couldn't afford the treatment I desperately needed. Empower NGO not only helped with the expenses but also connected me with specialists who provided excellent care.",
        role: "Healthcare Recipient",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      {
        name: "Maria Rodriguez",
        quote: "The health education workshops gave me knowledge I never had about preventive care. Now I can make better health decisions for my family.",
        role: "Community Member",
        image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
      },
      {
        name: "Dr. James Thompson",
        quote: "Working with Empower NGO to provide medical services to underserved communities has been the most rewarding experience of my career. The impact is immediate and tangible.",
        role: "Volunteer Doctor",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    ]
  },
  {
    id: "employment",
    title: "नोकरी व रोजगार क्षेत्र",
    icon: Briefcase,
    shortDescription: "समाजातील बेरोजगार मराठा तरुणांना नोकरी मिळावी या उद्देशाने नोकरीच्या संधी असलेल्या जाहिराती एका PDF मध्ये एकत्रित करून त्या सोशल मीडिया च्या माध्यामातून मराठा तरुणांपर्यंत पोहोचवल्या जातात. यासोबत वेळोवेळी कॉर्पोरेट आणि सरकारी क्षेत्रातील नोकरी संदर्भात आपण Facebook/YouTube सारख्या माध्यमांचा वापर करून तज्ञ व्यक्तींचे live विडिओ घेऊन मार्गदर्शन केले जाते.\nकेंद्र सरकार आणि महाराष्ट्र सरकार यांच्या कडून राबविल्या जाणार्‍या कौशल्य विकास कार्यक्रम अंतर्गत मराठा तरुणांना कौशल्य विकास आणि व्यक्तिगत विकासाच्या संधी उपलब्ध करून दिल्या जातात.",
    fullDescription: "Economic independence is crucial for sustainable change. Our employment assistance program equips individuals with the skills, resources, and opportunities needed to secure stable employment. We provide comprehensive job training, help with resume preparation, conduct mock interviews, offer career counseling, and connect participants with potential employers.",
    benefits: [
      "Vocational training and skill development",
      "Resume writing and interview preparation",
      "Job placement assistance",
      "Entrepreneurship guidance and support",
      "Professional networking opportunities",
      "Ongoing career development coaching"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ctaText: "Get Employment Help",
    ctaLink: "/contact?service=employment",
    testimonials: [
      {
        name: "David Nguyen",
        quote: "After losing my job during the pandemic, I felt hopeless. The job training program gave me new skills and the confidence to re-enter the workforce. I now have a stable job with growth potential.",
        role: "Program Graduate",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      {
        name: "Lisa Johnson",
        quote: "The resume workshop completely transformed my job search. I went from no callbacks to multiple interviews within weeks. The career counselors truly cared about my success.",
        role: "Job Seeker",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      },
      {
        name: "Marcus Washington",
        quote: "I never thought I could start my own business, but the entrepreneurship program gave me the knowledge and support I needed. My small business is now thriving and supporting my family.",
        role: "Entrepreneur",
        image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
      }
    ]
  },
  {
    id: "business",
    title: "व्यवसाय आणि उद्योग क्षेत्र",
    icon: Store,
    shortDescription: "सकल मराठा परिवार कडून संपूर्ण महाराष्ट्र मध्ये 300+ प्रत्येक तालुका स्तरावर तालुका प्रतिनिधी नेमून देण्यात आलेले आहेत. हे प्रतिनिधी अण्णासाहेब पाटील आर्थिक विकास महामंडळ कर्ज योजना च्या माध्यमातून मराठा उद्योजकांना त्यांच्या व्यवसाय वाढीसाठी आणि मराठा नवउद्योजकांना नवीन व्यवसाय उभारण्यासाठी मोफत मार्गदर्शन करत असतात. येणार्‍या काळात महाराष्ट्राच्या कानाकोपऱ्यातील प्रत्येक गावांत SMP प्रतिनिधी अण्णासाहेब पाटील आर्थिक विकास महामंडळ कर्ज योजनेच्या माध्यमातुन मराठा बांधवांना व्यावसायिक प्रगती संदर्भात मार्गदर्शन करण्यास कटिबद्ध असतील.\n\nयासोबतच येणाऱ्या काळात महाराष्ट्रातील प्रत्येक जिल्हास्तरावर व्यवसाय मेळावा घेण्याचे नियोजन सुद्धा आखले जाईल.",
    fullDescription: "We believe in fostering entrepreneurship and helping small businesses grow. Our business development program provides resources, mentorship, and financial guidance to aspiring entrepreneurs and existing business owners. We help them navigate challenges, access funding opportunities, and connect with networks that can propel their businesses forward.",
    benefits: [
      "Business mentorship from experienced entrepreneurs",
      "Access to loan schemes and financial resources",
      "Business plan development assistance",
      "Marketing and digital presence guidance",
      "Networking opportunities with industry experts",
      "Regular business development workshops and events"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ctaText: "अधिक माहिती",
    ctaLink: "/contact?service=business",
    testimonials: [
      {
        name: "राजेश पाटील",
        quote: "अण्णासाहेब पाटील आर्थिक विकास महामंडळ कर्ज योजनेच्या माध्यमातून मला माझा स्वतःचा व्यवसाय सुरू करण्यासाठी आवश्यक मार्गदर्शन आणि आर्थिक मदत मिळाली. आज माझा व्यवसाय चांगल्या प्रकारे चालू आहे.",
        role: "उद्योजक",
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      },
      {
        name: "सुनिता जाधव",
        quote: "SMP प्रतिनिधींच्या मार्गदर्शनामुळे मला माझा लघु उद्योग वाढवण्यासाठी आवश्यक कौशल्य आणि ज्ञान मिळाले. त्यांच्या सल्ल्यामुळे मी माझा व्यवसाय विस्तारित करू शकले.",
        role: "लघु उद्योजक",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      },
      {
        name: "प्रमोद शिंदे",
        quote: "व्यवसाय मेळाव्यामध्ये सहभागी होऊन मला अनेक नवीन संधी आणि संपर्क मिळाले. आता माझा व्यवसाय स्थानिक पातळीवरून राज्य पातळीवर पोहोचला आहे.",
        role: "व्यवसायिक",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      }
    ]
  },
  {
    id: "emergency",
    title: "आपत्कालीन मदत",
    icon: Bell,
    shortDescription: "अहमदनगर, नाशिक आणि पुणे जिल्ह्यात सकल मराठा परिवाराच्या माध्यमातून कोरोना काळात रुग्णांच्या नातेवाईकांना मोफत २ वेळचे जेवण पुरविण्यात आले होते. सोबतच समाजातील गरजू बांधवांना किराणा साहित्याचे किट बनवून वाटण्यात आले होते. \n\nसातारा-सांगली आणि रायगड-रत्नागिरी जिल्ह्यांमध्ये २०२१-२२ दरम्यान आलेल्या पूर परिस्थिती मध्ये सकल मराठा परिवार टीम कडून संपूर्ण महाराष्ट्र भरातून मदत गोळा करण्यात आली आणि निवडक प्रतिनिधी कडून ते सर्व साहित्य पूरग्रस्तांना पोहोचविण्यात आले. \n\nयासोबतच रत्नागिरी जिल्ह्यातील काही गावांमध्ये आरोग्य शिबिरांचे आयोजन करण्यात आले.",
    fullDescription: "Our emergency response program rapidly mobilizes resources during crises such as natural disasters, pandemics, or other emergencies. We provide immediate relief through food distribution, temporary shelter, medical aid, and emotional support. Our volunteers are trained to respond quickly and effectively to help communities recover from unexpected challenges.",
    benefits: [
      "Rapid emergency response during crises",
      "Food and essential supplies distribution",
      "Temporary shelter arrangements",
      "Medical aid in emergency situations",
      "Coordination with local authorities and services",
      "Post-disaster rehabilitation support"
    ],
    image: "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    ctaText: "अधिक माहिती",
    ctaLink: "/contact?service=emergency",
    testimonials: [
      {
        name: "सुनील पवार",
        quote: "कोरोना काळात माझ्या आईचा उपचार सुरू होता आणि मी एकटा होतो. सकल मराठा परिवारने मला दररोज दोन वेळचे जेवण पुरवून मोठी मदत केली.",
        role: "लाभार्थी",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
      },
      {
        name: "अनिता शिंदे",
        quote: "२०२१ मधील पुरामध्ये आमच्या गावातील बरेच लोक बेघर झाले होते. सकल मराठा परिवारच्या कार्यकर्त्यांनी आम्हाला अन्नधान्य, कपडे आणि इतर आवश्यक वस्तू पुरवल्या.",
        role: "पूरग्रस्त",
        image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      {
        name: "दत्तात्रय गायकवाड",
        quote: "रत्नागिरी जिल्ह्यात झालेल्या आरोग्य शिबिरामुळे मला माझ्या आजाराची माहिती मिळाली आणि वेळीच उपचार सुरू करता आले. या उपक्रमाबद्दल मी संस्थेचा आभारी आहे.",
        role: "ग्रामस्थ",
        image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
      }
    ]
  },
  {
    id: "community",
    title: "उद्योजकता विकास",
    icon: Home,
    shortDescription: "सकल मराठा परिवार कडून संपूर्ण महाराष्ट्र मध्ये 300+ प्रत्येक तालुका स्तरावर तालुका प्रतिनिधी नेमून देण्यात आलेले आहेत. हे प्रतिनिधी अण्णासाहेब पाटील आर्थिक विकास महामंडळ कर्ज योजना च्या माध्यमातून मराठा उद्योजकांना त्यांच्या व्यवसाय वाढीसाठी आणि मराठा नवउद्योजकांना नवीन व्यवसाय उभारण्यासाठी मोफत मार्गदर्शन करत असतात. येणार्‍या काळात महाराष्ट्राच्या कानाकोपऱ्यातील प्रत्येक गावांत SMP प्रतिनिधी अण्णासाहेब पाटील आर्थिक विकास महामंडळ कर्ज योजनेच्या माध्यमातुन मराठा बांधवांना व्यावसायिक प्रगती संदर्भात मार्गदर्शन करण्यास कटिबद्ध असतील.\n\nयासोबतच येणाऱ्या काळात महाराष्ट्रातील प्रत्येक जिल्हास्तरावर व्यवसाय मेळावा घेण्याचे नियोजन सुद्धा आखले जाईल.",
    fullDescription: "We believe in fostering entrepreneurship and helping small businesses grow. Our entrepreneurship development program provides resources, mentorship, and financial guidance to aspiring entrepreneurs and existing business owners. We help them navigate challenges, access funding opportunities, and connect with networks that can propel their businesses forward.",
    benefits: [
      "Entrepreneurship mentorship from experienced business leaders",
      "Access to loan schemes and financial resources",
      "Business plan development assistance",
      "Marketing and digital presence guidance",
      "Networking opportunities with industry experts",
      "Regular business development workshops and events"
    ],
    image: "https://images.unsplash.com/photo-1539798487796-7c2284ad1855?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ctaText: "अधिक माहिती",
    ctaLink: "/contact?service=community",
    testimonials: [
      {
        name: "राजेश पाटील",
        quote: "अण्णासाहेब पाटील आर्थिक विकास महामंडळ कर्ज योजनेच्या माध्यमातून मला माझा स्वतःचा उद्योग सुरू करण्यासाठी आवश्यक मार्गदर्शन आणि आर्थिक मदत मिळाली.",
        role: "नवउद्योजक",
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      },
      {
        name: "सुनिता जाधव",
        quote: "SMP प्रतिनिधींच्या मार्गदर्शनामुळे मला माझा लघु उद्योग वाढवण्यासाठी आवश्यक कौशल्य आणि ज्ञान मिळाले. त्यांच्या सल्ल्यामुळे मी माझा व्यवसाय विस्तारित करू शकले.",
        role: "लघु उद्योजक",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      },
      {
        name: "विजय गायकवाड",
        quote: "व्यवसाय मेळाव्यामध्ये सहभागी होऊन मला अनेक नवीन संधी आणि संपर्क मिळाले. आता माझा उद्योग स्थानिक पातळीवरून राज्य पातळीवर पोहोचला आहे.",
        role: "उद्योजक",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      }
    ]
  }
];

export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};

