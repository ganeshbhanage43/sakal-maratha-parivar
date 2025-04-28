
import React from 'react';
import { Users, GraduationCap, Heart, Briefcase } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  text: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  number,
  text
}) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-4xl font-bold mb-2 text-gray-800">{number}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white relative overflow-hidden">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d4d3cce817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">आमचे यश</h2>
          <p className="text-xl opacity-90">सकल मराठा परिवार मधील मराठा बांधव समाजकार्यात जवळपास 2016 पासून काम करत आहेत. सुरुवातीपासूनच मराठा समाजाच्या शैक्षणिक, व्यावसायिक, आरोग्य व नोकरी संबंधित अनेक उपक्रमांमध्ये वेळोवेळी जमेल त्या पद्धतीने व वेगवेगळ्या संघटनांच्या माध्यमातून प्रत्येकाने आपले महत्त्वपूर्ण योगदान दिलेले आहे. ही सर्व कामे करत असताना बऱ्याचदा समोरासमोर झालेल्या भेटी मधून असे निदर्शनास आले, की एका सुनियोजित आणि कॉमन प्लॅटफॉर्मची गरज आहे. म्हणूनच सकल मराठा परिवार मधील काही सदस्यांनी मिळून या संघटनेची स्थापना करण्याचा निर्णय घेतला व त्या माध्यमातून वर नमूद केलेल्या उपक्रमा सहित इतरही बरेच मराठा हिताचे कार्यक्रम राबवण्याचा प्रयत्न केला जात आहे. </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 transform transition-transform hover:scale-105">
            <StatCard icon={<GraduationCap size={32} />} number="5,000+" text="Students Educated (Career Guidance)" />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 transform transition-transform hover:scale-105">
            <StatCard icon={<Heart size={32} />} number="2,000+" text="Medical Cases Supported" />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 transform transition-transform hover:scale-105">
            <StatCard icon={<Briefcase size={32} />} number="500+" text="Jobs Secured" />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 transform transition-transform hover:scale-105">
            <StatCard icon={<Users size={32} />} number="100,000+" text="Members Engaged" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
