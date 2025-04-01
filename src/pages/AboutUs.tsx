
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, MapPin } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  About Eatsy<span className="text-culinary">.</span>
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-lg">
                  We're on a mission to transform how people discover and enjoy food by connecting them with the best restaurants in their city.
                </p>
              </div>
              
              <div className="w-full lg:w-1/2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2670&auto=format&fit=crop" 
                  alt="Eatsy Team" 
                  className="max-w-md rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2022, Eatsy began with a simple idea: make it easier for people to discover and order from the best restaurants around them. What started as a small project has grown into a platform connecting thousands of restaurants with food lovers across the country.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our team of food enthusiasts and tech experts work together to create a seamless experience for both diners and restaurant partners. We believe that great food should be accessible to everyone, and we're committed to supporting local restaurants and bringing their unique flavors to more people.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 mt-12">
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop" 
                  alt="Restaurant" 
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop" 
                  alt="Food" 
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1483648969698-5e7dcaa9444d?q=80&w=2670&auto=format&fit=crop" 
                  alt="Delivery" 
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto bg-culinary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <Shield className="h-8 w-8 text-culinary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality First</h3>
                <p className="text-gray-600">We partner only with restaurants that meet our high standards for food quality and service.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto bg-culinary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <Clock className="h-8 w-8 text-culinary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
                <p className="text-gray-600">We know time matters, so we ensure your food arrives fresh and on time, every time.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto bg-culinary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <Award className="h-8 w-8 text-culinary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Restaurant Growth</h3>
                <p className="text-gray-600">We support local restaurants by providing them with tools to expand their customer base.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto bg-culinary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-culinary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Local Focus</h3>
                <p className="text-gray-600">We celebrate the unique flavors of each community and promote local culinary experiences.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold mb-6">Join Our Journey</h2>
              <p className="text-gray-600 mb-8">
                Want to be part of the food revolution? Whether you're a food lover, restaurant owner, or potential team member, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-culinary hover:bg-culinary-dark">
                  Partner With Us
                </Button>
                <Button variant="outline" className="border-culinary text-culinary hover:bg-culinary/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
