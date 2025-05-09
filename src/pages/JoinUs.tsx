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
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number."
  }),
  interest: z.string({
    required_error: "Please select an area of interest."
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters."
  }).max(500, {
    message: "Message cannot exceed 500 characters."
  })
});
const volunteerOpportunities = [{
  title: "Mentoring",
  description: "Guide and support individuals through knowledge sharing and advice.",
  icon: Book
}, {
  title: "Event Organization",
  description: "Help plan and execute community events and fundraisers.",
  icon: Calendar
}, {
  title: "Support Services",
  description: "Provide essential services to those in need within our programs.",
  icon: Heart
}, {
  title: "Community Outreach",
  description: "Connect with the broader community to raise awareness.",
  icon: Users
}, {
  title: "Communications",
  description: "Help with social media, newsletters, and other communications.",
  icon: MessageSquare
}, {
  title: "Helpline Volunteer",
  description: "Staff our support helpline to assist those seeking information.",
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
      title: "Form submitted successfully!",
      description: "We'll be in touch with you soon."
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">आजच सकल मराठा परिवाराचा भाग व्हा आणि मराठ्यांनी मिळून मराठ्यांच्या प्रगतीला हातभार लावण्याचे स्वप्न साकार करा.</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
                <p className="text-gray-700 mb-4">
                  At Empower NGO, we believe in the power of community and collective action. 
                  By joining our team, you'll have the opportunity to make a real impact 
                  on the lives of those in need, while developing valuable skills and 
                  building meaningful connections.
                </p>
                <p className="text-gray-700 mb-4">
                  Whether you have just a few hours to spare or are looking for a more 
                  substantial commitment, we have opportunities that can fit your schedule 
                  and utilize your unique talents and skills.
                </p>
                <p className="text-gray-700">
                  Together, we can create a more equitable and compassionate community.
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
            <h2 className="text-3xl font-bold mb-10 text-center">Volunteer Opportunities</h2>
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
            <h2 className="text-3xl font-bold mb-10 text-center">Sign Up to Volunteer</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="phone" render={({
                field
              }) => <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="interest" render={({
                field
              }) => <FormItem>
                      <FormLabel>Area of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an area of interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mentoring">Mentoring</SelectItem>
                          <SelectItem value="events">Event Organization</SelectItem>
                          <SelectItem value="support">Support Services</SelectItem>
                          <SelectItem value="outreach">Community Outreach</SelectItem>
                          <SelectItem value="communications">Communications</SelectItem>
                          <SelectItem value="helpline">Helpline Volunteer</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about yourself and why you'd like to volunteer with us..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default JoinUs;