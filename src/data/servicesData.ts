import { BookOpen, Heart, Briefcase, Home } from 'lucide-react';

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
    shortDescription: "महाराष्ट्र सरकार स्थापित स्वायत्त संस्था म्हणून सारथी संस्थेकडून शैक्षणिक क्षेत्रात जे उपक्रम राबविले जातात, ते सर्व उपक्रम तळागाळातील मराठा विद्यार्थ्यांपर्यंत पोहोचविण्याचे काम SMP प्रतिनिधी यांच्याकडून केले जाते.",
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
    title: "Healthcare Access",
    icon: Heart,
    shortDescription: "Our healthcare initiatives focus on providing access to medical services and health education.",
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
    title: "Employment Assistance",
    icon: Briefcase,
    shortDescription: "We offer job training, resume building, and career counseling to help individuals find employment.",
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
    id: "community",
    title: "Community Development",
    icon: Home,
    shortDescription: "Building stronger communities through local initiatives, workshops, and infrastructure projects.",
    fullDescription: "Strong communities are the foundation of societal progress. Our community development program works at the grassroots level to strengthen neighborhoods through infrastructure improvements, capacity building, leadership development, and social cohesion activities. We believe in empowering communities to identify their own needs and actively participate in creating solutions.",
    benefits: [
      "Community infrastructure development",
      "Local leadership training and support",
      "Environmental sustainability initiatives",
      "Cultural preservation and promotion",
      "Community gardens and food security programs",
      "Digital inclusion and technology access"
    ],
    image: "https://images.unsplash.com/photo-1582213782179-e0d4d3cce817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ctaText: "Support Community Projects",
    ctaLink: "/contact?service=community",
    testimonials: [
      {
        name: "Elena Rivera",
        quote: "The community center built by Empower NGO has transformed our neighborhood. It's now a hub for education, connection, and support for residents of all ages.",
        role: "Community Leader",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      },
      {
        name: "Thomas Jackson",
        quote: "Through the leadership training program, I gained the skills and confidence to advocate for my community. We've now secured funding for several local improvement projects.",
        role: "Community Activist",
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Maya Singh",
        quote: "Our community garden has not only provided fresh food but has brought neighbors together who never spoke before. It's become a place of learning, sharing and connection.",
        role: "Garden Coordinator",
        image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=741&q=80"
      }
    ]
  }
];

export const getServiceById = (id: string): ServiceData | undefined => {
  return servicesData.find(service => service.id === id);
};
