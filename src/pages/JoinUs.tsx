
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Book, Calendar, Headphones, Heart, MessageSquare, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "नाव किमान २ अक्षरे असणे आवश्यक आहे."
  }),
  email: z.string().email({
    message: "कृपया वैध ईमेल पत्ता प्रविष्ट करा."
  }),
  phone: z.string().min(10, {
    message: "कृपया वैध फोन नंबर प्रविष्ट करा."
  }),
  interest: z.string({
    required_error: "कृपया आवडीचे क्षेत्र निवडा."
  }),
  message: z.string().min(10, {
    message: "संदेश किमान १० अक्षरे असणे आवश्यक आहे."
  }).max(500, {
    message: "संदेश ५०० अक्षरांपेक्षा जास्त असू शकत नाही."
  })
});

const volunteerOpportunities = [{
  title: "मार्गदर्शन",
  description: "ज्ञान आणि सल्ला वाटून व्यक्तींना मार्गदर्शन आणि सहाय्य करणे.",
  icon: Book
}, {
  title: "कार्यक्रम आयोजन",
  description: "समुदाय कार्यक्रमांचे नियोजन आणि अंमलबजावणी करण्यात मदत करणे.",
  icon: Calendar
}, {
  title: "सहाय्य सेवा",
  description: "आमच्या कार्यक्रमांमध्ये गरजूंना आवश्यक सेवा प्रदान करणे.",
  icon: Heart
}, {
  title: "समुदाय जागृती",
  description: "जागरूकता वाढवण्यासाठी व्यापक समुदायाशी जोडणे.",
  icon: Users
}, {
  title: "संवाद",
  description: "सोशल मीडिया, न्यूजलेटर आणि इतर संवादांमध्ये मदत करणे.",
  icon: MessageSquare
}, {
  title: "हेल्पलाइन स्वयंसेवक",
  description: "माहिती शोधणाऱ्यांना मदत करण्यासाठी आमच्या सहाय्य हेल्पलाइनचे कार्य करणे.",
  icon: Headphones
}];

const JoinUs = () => {
  const {
    toast
  } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real app, you would send this data to a server
    toast({
      title: "अर्ज यशस्वीरीत्या सादर केला गेला!",
      description: "आम्ही लवकरच आपल्याशी संपर्क साधू."
    });
    form.reset();
  }
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="bg-primary py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">आमच्या टीममध्ये सामील व्हा</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">आजच सकल मराठा परिवाराचा भाग व्हा आणि मराठ्यांनी मिळून मराठ्यांच्या प्रगतीला हातभार लावण्याचे स्वप्न साकार करा.</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">आमच्यासोबत का सामील व्हावे?</h2>
                <p className="text-gray-700 mb-4">
                  सोशल मीडियाच्या माध्यमातून सकल मराठा परिवार मधील सदस्य व प्रतिनिधींना संपर्क करू शकता.
                </p>
                <p className="text-gray-700 mb-4">
                  संघटनेमध्ये येण्यासाठी आपल्याकडे फक्त मराठा बांधवांच्या प्रगती आणि हिताशी संबंधित काम करण्याची तळमळ असली पाहिजे. संघटनेमध्ये येण्याआधी आपली सामाजिक, राजकीय, शैक्षणिक, व्यावसायिक, आर्थिक पार्श्वभूमी काहीही असली तरी चालेल, फक्त ज्यावेळी सकल मराठा परिवार संघटनेसोबत जोडले जाल त्यावेळी स्वतःच्या वैयक्तिक महत्त्वकांक्षा आणि स्वार्थ यांना बाजूला ठेवून समाजाप्रती आपले कर्तव्य निभावण्याची तयारी असावी.
                </p>
                <p className="text-gray-700 mb-4">
                  संघटनेमधील प्रत्येक प्रतिनिधी आणि सदस्य आपले कर्तव्य म्हणून समाजाचे काम करण्यासाठी इथे येत असतो त्यामुळे एकमेकांबद्दल आदराची भावना ठेवणे गरजेचे आहे.
                </p>
                <p className="text-gray-700">
                  हे काम करत असताना आपल्याला कोणत्याही प्रकारचे आर्थिक सहाय्य करण्याची गरज नाही, यामध्ये फक्त आपल्या सोयीनुसार वेळेची गुंतवणूक करणे महत्त्वाचे आहे.
                </p>
              </div>
              <div className="flex justify-center">
                
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center">स्वयंसेवा संधी</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteerOpportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                    <p className="text-gray-600">{opportunity.description}</p>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* Sign-Up Form */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold mb-10 text-center">स्वयंसेवक म्हणून नोंदणी करा</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel>पूर्ण नाव</FormLabel>
                      <FormControl>
                        <Input placeholder="संपूर्ण नाव" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel>ईमेल पत्ता</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="आपला@ईमेल.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="phone" render={({
                field
              }) => <FormItem>
                      <FormLabel>फोन नंबर</FormLabel>
                      <FormControl>
                        <Input placeholder="9876543210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="interest" render={({
                field
              }) => <FormItem>
                      <FormLabel>आवडीचे क्षेत्र</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="आवडीचे क्षेत्र निवडा" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mentoring">मार्गदर्शन</SelectItem>
                          <SelectItem value="events">कार्यक्रम आयोजन</SelectItem>
                          <SelectItem value="support">सहाय्य सेवा</SelectItem>
                          <SelectItem value="outreach">समुदाय जागृती</SelectItem>
                          <SelectItem value="communications">संवाद</SelectItem>
                          <SelectItem value="helpline">हेल्पलाइन स्वयंसेवक</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                      <FormLabel>संदेश</FormLabel>
                      <FormControl>
                        <Textarea placeholder="स्वतःबद्दल आणि आपण आमच्यासोबत स्वयंसेवक का होऊ इच्छिता याबद्दल सांगा..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <Button type="submit" className="w-full">अर्ज सादर करा</Button>
              </form>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default JoinUs;
