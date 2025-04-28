import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, GraduationCap, Home, Briefcase } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AboutUs = () => {
  const [donationAmount, setDonationAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const presetAmounts = [10, 25, 50, 100];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount ? parseInt(customAmount, 10) : donationAmount;
    toast({
      title: "Thank you for your donation!",
      description: `Your donation of $${amount} will help us make a difference.`,
      duration: 5000
    });
  };

  const selectAmount = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                  <span className="text-primary">सकल मराठा परिवार (SMP)</span>
                </h1>
                <p className="mb-6 text-lg text-slate-500">सकल मराठा परिवार (SMP) मराठा समाजाला मुख्यतः शैक्षणिक, व्यवसायिक, नोकरी व आर्थिक क्षेत्रात प्रगती करण्यासाठी सतत प्रयत्नशील राहणारी संस्था असून, सोबतच समाजाचे आपण काहीतरी देणे लागतो या भावनेने वैद्यकीय क्षेत्रात समाजातील सर्व घटकांना सतत मदत करत आहे व भविष्यात करत राहणार आहे</p>
                <p className="mb-6 text-lg text-slate-500">मिशन :- (short term) 
सामाजिक उपक्रमांच्या माध्यमातून मराठा तरुण पिढी मध्ये मराठा विकासाचे बीज रोवून एक कट्टर मराठा फळी तयार करणे. 
व्हिजन :- (Long Term) 
मराठा समाजातील तरुण पिढीला भविष्यात सामाजिक, आर्थिक, राजकीय, शैक्षणिक, नोकरी, व्यावसायिक इत्यादी प्रत्येक क्षेत्रात अग्रस्थानी आणणे आणि त्यायोगे सामान्य मराठ्यांचे वर्चस्व पुन्हा प्रस्थापित करणे. समाजातील शहरी व ग्रामीण भागातील दु���्लभ मराठा वर्गाला मुख्य प्रवाहात आणण्यासाठी कटिबद्धरीत्या प्रयत्न करणे.</p>
              </div>
              <div className="relative animate-fade-in">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1509099652299-30938b0aeb63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Diverse team meeting" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-lg -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Timeline Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              आमचा <span className="text-primary">प्रवास</span>
            </h2>

            <div className="max-w-3xl mx-auto mb-12">
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-600 text-lg">
                    सकल मराठा परिवार (SMP) मधील मराठा बांधव समाजकार्यात जवळपास 2016 पासून काम करत आहेत. सुरुवातीपासूनच मराठा समाजाच्या शैक्षणिक, व्यावसायिक, आरोग्य व नोकरी संबंधित अनेक उपक्रमांमध्ये वेळोवेळी जमेल त्या पद्धतीने व वेगवेगळ्या संघटनांच्या माध्यमातून प्रत्येकाने आपले महत्त्वपूर्ण योगदान दिलेले आहे.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

              {/* Timeline items */}
              <div className="space-y-16">
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-primary text-white rounded-full p-3 z-10">
                      <span className="font-bold">2010</span>
                    </div>
                  </div>
                  <Card className="max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-primary">Foundation</h3>
                      <p className="text-gray-600">
                        Empower NGO was founded by a group of passionate individuals who saw the 
                        need for comprehensive community support. Starting with just 5 volunteers, 
                        we began our first education initiative in an underserved community.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-primary text-white rounded-full p-3 z-10">
                      <span className="font-bold">2013</span>
                    </div>
                  </div>
                  <Card className="max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-primary">Expanding Our Reach</h3>
                      <p className="text-gray-600">
                        We expanded our services to include healthcare assistance and employment 
                        training. Our team grew to 20 full-time staff and over 50 regular volunteers, 
                        allowing us to serve three additional communities.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-primary text-white rounded-full p-3 z-10">
                      <span className="font-bold">2017</span>
                    </div>
                  </div>
                  <Card className="max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-primary">National Recognition</h3>
                      <p className="text-gray-600">
                        Our work was recognized nationally when we received the Community Impact 
                        Award. This recognition helped us form partnerships with major corporations 
                        and government agencies, significantly increasing our funding and impact.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-primary text-white rounded-full p-3 z-10">
                      <span className="font-bold">2021</span>
                    </div>
                  </div>
                  <Card className="max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-primary">Digital Transformation</h3>
                      <p className="text-gray-600">
                        We embraced technology to enhance our reach and efficiency, launching 
                        online education platforms and telemedicine services. This transformation 
                        allowed us to continue serving communities even during global challenges.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-primary text-white rounded-full p-3 z-10">
                      <span className="font-bold">Today</span>
                    </div>
                  </div>
                  <Card className="max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-primary">Looking Forward</h3>
                      <p className="text-gray-600">
                        Today, Empower NGO operates in over 15 communities with 100+ staff and 
                        500+ volunteers. We continue to innovate and expand our services, always 
                        guided by our core mission of empowering individuals and building communities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Highlights Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white relative overflow-hidden">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d4d3cce817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">आमचे यश</h2>
              <p className="text-xl opacity-90">सकल मराठा परिवार मधील मराठा बांधव समाजकार्यात जवळपास 2016 पासून काम करत आहेत. सुरुवातीपासूनच मराठा समाजाच्या शैक्षणिक, व्यावसायिक, आरोग्य व नोकरी संबंधित अनेक उपक्रमांमध्ये वेळोवेळी जमेल त्या पद्धतीने व वेगवेगळ्या संघटनांच्या माध्यमातून प्रत्येकाने आपले महत्त्वपूर्ण योगदान दिलेले आहे.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2">5,000+</h3>
                <p className="text-lg">Students Educated</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2">2,000+</h3>
                <p className="text-lg">Medical Cases Supported</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p className="text-lg">Jobs Secured</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2">100,000+</h3>
                <p className="text-lg">Members Engaged</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                <span className="text-primary">आर्थिक साहाय्य</span>
              </h2>
              <p className="text-gray-600 text-center mb-8 text-lg">आमच्यासोबत काम करत असताना आपल्याला कोणत्याही अनिवार्य प्रकारचे आर्थिक सहाय्य करण्याची गरज नाही, यामध्ये फक्त आपल्या सोयीनुसार वेळेची गुंतवणूक करणे महत्त्वाचे आहे. (स्वेच्छेनुसार केलेले साहाय्य नक्कीच स्वीकारले जाईल.)</p>

              <form onSubmit={handleDonationSubmit} className="space-y-6">
                <div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {presetAmounts.map(amount => {})}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-amount" className="text-lg font-medium block">
                    Or enter a custom amount
                  </Label>
                  <div className="flex items-center">
                    
                    
                  </div>
                </div>

                <div className="pt-6">
                  
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-secondary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">सामील व्हा
          </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">सोशल मीडियाच्या माध्यमातून सकल मराठा परिवार मधील सदस्य व प्रतिनिधींना संपर्क करू शकता.

          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-secondary hover:bg-gray-100 hover:text-secondary text-lg py-6 px-8">
                <Link to="/join">Join Us</Link>
              </Button>
              <Button asChild className="bg-transparent border-2 border-white hover:bg-white/10 text-lg py-6 px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};

export default AboutUs;
