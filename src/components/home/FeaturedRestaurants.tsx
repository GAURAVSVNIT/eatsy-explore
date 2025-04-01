
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const restaurants = [
  {
    id: 1,
    name: "Artisan Bistro",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2274&auto=format&fit=crop",
    cuisine: "Fine Dining, European",
    rating: 4.8,
    deliveryTime: "30-45",
    distance: "2.5 km",
    priceRange: "$$$",
    promotion: "Free delivery",
    path: "/restaurant/artisan-bistro",
  },
  {
    id: 2,
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2340&auto=format&fit=crop",
    cuisine: "Indian, Asian",
    rating: 4.5,
    deliveryTime: "35-50",
    distance: "3.2 km",
    priceRange: "$$",
    promotion: "20% OFF",
    path: "/restaurant/spice-garden",
  },
  {
    id: 3,
    name: "Urban Plate",
    image: "https://images.unsplash.com/photo-1588123190131-1c3fac394f4b?q=80&w=2340&auto=format&fit=crop",
    cuisine: "American, Contemporary",
    rating: 4.7,
    deliveryTime: "25-40",
    distance: "1.8 km",
    priceRange: "$$$",
    path: "/restaurant/urban-plate",
  },
  {
    id: 4,
    name: "Pasta Paradise",
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=2274&auto=format&fit=crop",
    cuisine: "Italian, Mediterranean",
    rating: 4.6,
    deliveryTime: "30-45",
    distance: "2.7 km",
    priceRange: "$$",
    promotion: "Buy 1 Get 1",
    path: "/restaurant/pasta-paradise",
  },
];

const FeaturedRestaurants = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-heading">Featured Restaurants</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={restaurant.path}
              className="bg-white rounded-lg overflow-hidden shadow hover-card"
            >
              <div className="relative h-48">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                {restaurant.promotion && (
                  <Badge className="absolute top-3 right-3 bg-culinary">
                    {restaurant.promotion}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{restaurant.name}</h3>
                <p className="text-gray-500 text-sm">{restaurant.cuisine}</p>
                <div className="flex items-center mt-2">
                  <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium mr-2">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {restaurant.rating}
                  </div>
                  <span className="text-gray-500 text-xs">• {restaurant.deliveryTime} min</span>
                  <span className="text-gray-500 text-xs mx-2">•</span>
                  <span className="text-gray-500 text-xs">{restaurant.distance}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-gray-600 text-sm">{restaurant.priceRange}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
