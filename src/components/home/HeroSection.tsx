
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="relative bg-black hero-pattern">
      <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 text-white animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 md:leading-tight">
            <span className="gradient-text">Experience</span> the Finest Culinary Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Discover the best food from over 1,000 restaurants and get fast delivery to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="w-full pl-10 pr-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-culinary text-gray-900"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button className="bg-culinary hover:bg-culinary-dark text-white px-6 py-3">
              Find Food
            </Button>
          </div>
          <div className="mt-6 text-gray-400 text-sm flex flex-wrap gap-x-6 gap-y-2">
            <span>Popular cities:</span>
            <a href="#" className="hover:text-culinary">New York</a>
            <a href="#" className="hover:text-culinary">Los Angeles</a>
            <a href="#" className="hover:text-culinary">Chicago</a>
            <a href="#" className="hover:text-culinary">San Francisco</a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img 
            src="public/lovable-uploads/3d3a5ed3-9778-4cfd-9e38-c30e380b6ccb.png" 
            alt="Culinary Delights" 
            className="max-w-full h-auto object-contain rounded-lg animate-fade-up"
          />
        </div>
      </div>

      <div className="absolute -bottom-5 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default HeroSection;
