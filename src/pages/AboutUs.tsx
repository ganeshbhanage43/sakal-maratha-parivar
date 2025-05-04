import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, GraduationCap, Home, Briefcase, FileText, Calendar, ChartBar, Info } from 'lucide-react';
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
                <p className="mb-6 text-lg text-slate-500">मिशन :- (short term) सामाजिक उपक्रमांच्या माध्यमातून मराठा तरुण पिढी मध्ये मराठा विकासाचे बीज रोवून एक कट्टर मराठा फळी तयार करणे. व्हिजन :- (Long Term) मराठा समाजातील तरुण पिढीला भविष्यात सामाजिक, आर्थिक, राजकीय, शैक्षणिक, नोकरी, व्यावसायिक इत्यादी प्रत्येक क्षेत्रात अग्रस्थानी आणणे आणि त्यायोगे सामान्य मराठ्यांचे वर्चस्व पुन्हा प्रस्थापित करणे. समाजातील शहरी व ग्रामीण भागातील मराठा वर्गाला मुख्य प्रवाहात आणण्यासाठी कटिबद्धरीत्या प्रयत्न करणे.</p>
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
                  <p className="text-gray-600 text-lg">स्थापना वर्ष: सकल मराठा परिवार संघटनेची स्थापना ११ ऑक्टोबर 2022 रोजी झालेली असून या संघटनेतील बरेच सदस्य व प्रतिनिधी यांनी 2016 पासून वेगवेगळ्या संघटनांच्या माध्यमातून मराठा समाजाच्या हिताचे जेवढे उपक्रम होत आलेले आहेत, त्या सर्वांमध्ये आपापल्या पातळीवर सहभाग नोंदवलेला आहे.</p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information Sections */}
            <div className="space-y-8 mt-12">
              {/* Background Section */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Info size={24} className="text-primary" /> पार्श्वभूमी माहिती:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">सकल मराठा परिवार मधील मराठा बांधव समाजकार्यात जवळपास 2016 पासून काम करत आहेत. सुरुवातीपासूनच मराठा समाजाच्या शैक्षणिक, व्यावसायिक, आरोग्य व नोकरी संबंधित अनेक उपक्रमांमध्ये वेळोवेळी जमेल त्या पद्धतीने व वेगवेगळ्या संघटनांच्या माध्यमातून प्रत्येकाने आपले महत्त्वपूर्ण योगदान दिलेले आहे. ही सर्व कामे करत असताना बऱ्याचदा समोरासमोर झालेल्या भेटी मधून असे निदर्शनास आले, की एका सुनियोजित आणि कॉमन प्लॅटफॉर्मची गरज आहे. म्हणूनच सकल मराठा परिवार मधील काही सदस्यांनी मिळून या संघटनेची स्थापना करण्याचा निर्णय घेतला व त्या माध्यमातून वर नमूद केलेल्या उपक्रमा सहित इतरही बरेच मराठा हिताचे कार्यक्रम राबवण्याचा प्रयत्न केला जात आहे.</p>
                </CardContent>
              </Card>
              
              {/* Challenges Section */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <FileText size={24} className="text-primary" /> आव्हाने आणि भविष्यातील अडचणी:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">विविध राजकीय पक्षांसोबत जोडलेल्या मराठा तरुणांमध्ये जागृती करून त्यांच्यामध्ये मराठावाद जोपासणे गरजेचे आहे. एक कट्टर मराठा म्हणून आपल्या सोबत जोडलेल्या प्रत्येक बांधवाने संघटनेचे ध्येय समजून घेऊन त्या दिशेने जमेल त्या पातळीवर जबाबदारी घेऊन प्रयत्न केले पाहिजेत.</p>
                  
                  <p className="text-gray-600 text-lg mt-4">मराठा तरुणांमध्ये क्षमता असूनही नौकऱ्या अभावी वाढती बेरोजगारी व त्यामुळे येणाऱ्या नैराश्यातुन काही तरुण गुन्हेगारी कडे वळण्याची शक्यता असू शकते व त्यामुळे त्यांचा दैनंदिन जीवनातील कुटुंबावर होणारा परिणाम यासाठी कायमस्वरूपी उपाययोजना करणे.</p>
                </CardContent>
              </Card>
              
              {/* Future Planning Section */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Calendar size={24} className="text-primary" /> भविष्यातील सामान्य नियोजन:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">एखाद्या समाजामध्ये राहत असलेल्या सदस्यांची संख्या त्या समाजाची ताकद ठरू शकते. परंतु हे तेव्हाच शक्य होईल जेव्हा तो समाज आणि त्यामध्ये राहत असलेल्या प्रत्येक व्यक्ती आणि सदस्यांमध्ये एकीची भावना असेल. महाराष्ट्रातील मराठा समाजाच्या संख्येबद्दल सर्वजण अवगत आहेतच, पण एवढी मोठी संख्या असून सुद्धा मराठा समाजामध्ये एकीच्या भावनेची उणीव कायम भासत राहते.</p>
                  
                  <p className="text-gray-600 text-lg mt-4">सकल मराठा परिवारामध्ये सहभागी होणाऱ्या सदस्यांपैकी बहुतांश लोक सामान्य मध्यमवर्गीय किंवा गरीब कुटुंबातील आहेत. श्रीमंत वर्गातील मराठा बांधवांची आपल्या सोबत येण्याची इच्छा असून सुद्धा त्यांच्या वैयक्तिक राजकीय, सामाजिक किंवा पारिवारिक महत्त्वकांक्षा जपण्यासाठी ते प्रत्यक्षपणे आपला सहभाग दर्शवू शकत नाही.</p>
                </CardContent>
              </Card>
              
              {/* Financial Overview Section */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <ChartBar size={24} className="text-primary" /> आर्थिक विहंगावलोकन:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">संस्थेच्या कार्यक्रमांचा वाढता व्याप लक्षात घेता, आर्थिक नियोजनाचे महत्व अधोरेखित होते. सकल मराठा परिवारच्या उपक्रमांसाठी निधी संकलन करण्याच्या वेगवेगळ्या मार्गांची आम्ही सातत्याने शोध घेत आहोत. स्वयंसेवकांच्या कार्याबरोबरच, आर्थिक साहाय्य हे देखील महत्त्वाचे आहे.</p>
                  
                  <p className="text-gray-600 text-lg mt-4">आमच्या प्रत्येक कार्यक्रमासाठी पारदर्शक आर्थिक आराखडा तयार केला जातो आणि त्याचे मूल्यांकन केले जाते. आमच्या दानदात्यांना, त्यांच्या दानाचा उपयोग कशासाठी केला जातो याची माहिती मिळावी यासाठी आम्ही सातत्याने प्रयत्नशील आहोत.</p>
                </CardContent>
              </Card>
              
              {/* Social Media Section */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Users size={24} className="text-primary" /> सोशल मीडिया आणि ऑनलाइन उपस्थिती:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">आधुनिक युगात संवाद आणि जागरुकता वाढविण्यासाठी सोशल मीडिया एक महत्त्वपूर्ण माध्यम बनले आहे. सकल मराठा परिवार फेसबुक, इन्स्टाग्राम, आणि व्हाट्सएप यासारख्या विविध सोशल मीडिया प्लॅटफॉर्मवर सक्रिय आहे.</p>
                  
                  <p className="text-gray-600 text-lg mt-4">आमच्या ऑनलाइन उपस्थितीमुळे आम्हाला अधिक लोकांपर्यंत पोहोचण्यास मदत होते आणि आमच्या उपक्रमांबद्दल जागरूकता वाढविण्यास मदत होते. आमच्या सोशल मीडिया हँडल्सचा वापर करून आपण आमच्या कार्यक्रमांविषयी अपडेट मिळवू शकता आणि आमच्याशी संवाद साधू शकता.</p>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    <Button variant="outline" asChild className="flex items-center gap-2 border-blue-500 text-blue-500">
                      <a href="https://www.facebook.com/groups/730673071981150/?ref=share" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        Facebook
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex items-center gap-2 border-pink-500 text-pink-500">
                      <a href="https://www.instagram.com/sakal_maratha_pariwar_npo?igsh=MWdrcWZzb3pkOG5pbg==" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        Instagram
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex items-center gap-2 border-green-500 text-green-500">
                      <a href="https://whatsapp.com/channel/0029Vau2WbNJf05Ycu7UAI2r" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M12 17a5 5 0 0 1-5-5v-1a5 5 0 0 1 10 0v1a5 5 0 0 1-5 5Z" />
                        </svg>
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

              {/* Timeline items */}
              <div className="space-y-16">
                {/* Timeline items would go here */}
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
                    {presetAmounts.map(amount => <button key={amount} type="button" className={`py-2 px-4 rounded-md border ${donationAmount === amount && !customAmount ? 'bg-primary text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`} onClick={() => selectAmount(amount)}>
                        ${amount}
                      </button>)}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-amount" className="text-lg font-medium block">
                    Or enter a custom amount
                  </Label>
                  <div className="flex items-center">
                    <span className="bg-gray-200 py-2 px-4 rounded-l-md">$</span>
                    <Input id="custom-amount" type="number" min="1" placeholder="Custom amount" value={customAmount} onChange={handleCustomAmountChange} className="rounded-l-none" />
                  </div>
                </div>

                <div className="pt-6">
                  <Button type="submit" className="w-full py-6 text-lg">
                    Donate Now
                  </Button>
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