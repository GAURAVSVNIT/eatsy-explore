
import { Button } from "@/components/ui/button";
import { Phone, Star, Clock } from "lucide-react";

const AppPromotion = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Get the Eatsy App<span className="text-culinary">.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              We'll send you a link to download the app and start ordering from your favorite restaurants with exclusive app-only offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-culinary text-gray-900"
                />
              </div>
              <Button className="bg-culinary hover:bg-culinary-dark text-white px-6">
                Send App Link
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#" className="block">
                <img 
                  src="https://web.archive.org/web/20230917192737im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" 
                  alt="Google Play" 
                  className="h-12"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://web.archive.org/web/20230917192737im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" 
                  alt="App Store" 
                  className="h-12"
                />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="https://web.archive.org/web/20230917192737im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
                alt="Mobile App" 
                className="max-w-xs lg:max-w-sm"
              />
              
              <div className="absolute top-1/4 -left-16 bg-white text-black p-4 rounded-lg shadow-lg max-w-xs animate-fade-up">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-bold">Live Order Tracking</span>
                </div>
                <p className="text-sm text-gray-600">
                  Track your food in real-time from preparation to delivery
                </p>
              </div>
              
              <div className="absolute top-2/4 -right-16 bg-white text-black p-4 rounded-lg shadow-lg max-w-xs animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-culinary" />
                  <span className="font-bold">30 Min Delivery</span>
                </div>
                <p className="text-sm text-gray-600">
                  Fastest delivery with our dedicated delivery fleet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
