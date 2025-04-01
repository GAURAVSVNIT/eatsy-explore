
import { Star, Clock, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RestaurantHeaderProps {
  restaurant: {
    name: string;
    image: string;
    cuisine: string;
    rating: number;
    reviewCount: number;
    deliveryTime: string;
    distance: string;
    address: string;
    contact: string;
    isVeg?: boolean;
  };
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  return (
    <div className="relative">
      <div className="h-64 md:h-80 w-full">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 relative -mt-32 z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    {restaurant.rating}
                  </div>
                  <span className="text-gray-500 text-sm ml-1">
                    ({restaurant.reviewCount}+ ratings)
                  </span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {restaurant.deliveryTime} min
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {restaurant.distance}
                </div>
                {restaurant.isVeg && (
                  <Badge variant="outline" className="border-green-500 text-green-600">
                    Pure Veg
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Badge className="bg-culinary mb-2">30% OFF up to $10</Badge>
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                {restaurant.address}
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <Phone className="h-4 w-4 mr-1" />
                {restaurant.contact}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
