
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Clock,
  Filter,
  ChevronDown,
  SortAsc,
  Vegan,
  DollarSign,
  Utensils,
} from "lucide-react";

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
  {
    id: 5,
    name: "Tokyo Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop",
    cuisine: "Japanese, Sushi",
    rating: 4.9,
    deliveryTime: "35-50",
    distance: "4.0 km",
    priceRange: "$$$$",
    path: "/restaurant/tokyo-sushi",
  },
  {
    id: 6,
    name: "Green Garden",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop",
    cuisine: "Vegan, Healthy",
    rating: 4.4,
    deliveryTime: "25-35",
    distance: "2.1 km",
    priceRange: "$$",
    promotion: "15% OFF",
    path: "/restaurant/green-garden",
  },
];

const cuisineFilters = [
  "Italian", "Indian", "Japanese", "American", "Chinese", "Thai", 
  "Mediterranean", "Mexican", "French", "Korean", "Vegan"
];

const Restaurants = () => {
  const [activeSort, setActiveSort] = useState("recommended");
  const [showVegOnly, setShowVegOnly] = useState(false);
  const [activePriceRange, setActivePriceRange] = useState<string[]>([]);
  const [activeCuisines, setActiveCuisines] = useState<string[]>([]);

  const togglePriceRange = (range: string) => {
    setActivePriceRange(prev => 
      prev.includes(range) 
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
  };

  const toggleCuisine = (cuisine: string) => {
    setActiveCuisines(prev => 
      prev.includes(cuisine) 
        ? prev.filter(c => c !== cuisine)
        : [...prev, cuisine]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-8 pb-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Restaurants Near You
            </h1>
            <p className="text-gray-600">
              Discover amazing places to eat around your location
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-xl">Filters</h2>
                  <Button variant="link" className="text-culinary p-0 h-auto">
                    Clear All
                  </Button>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">Dietary</h3>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={showVegOnly ? "default" : "outline"}
                      className={`flex items-center gap-2 ${showVegOnly ? "bg-culinary hover:bg-culinary-dark" : ""}`}
                      onClick={() => setShowVegOnly(!showVegOnly)}
                    >
                      <Vegan className="h-4 w-4" />
                      Pure Veg
                    </Button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">Price Range</h3>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["$", "$$", "$$$", "$$$$"].map((range) => (
                      <Button
                        key={range}
                        variant={activePriceRange.includes(range) ? "default" : "outline"}
                        className={activePriceRange.includes(range) ? "bg-culinary hover:bg-culinary-dark" : ""}
                        onClick={() => togglePriceRange(range)}
                      >
                        {range}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">Cuisines</h3>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cuisineFilters.map((cuisine) => (
                      <Button
                        key={cuisine}
                        variant={activeCuisines.includes(cuisine) ? "default" : "outline"}
                        className={`text-sm py-1 px-3 h-auto ${activeCuisines.includes(cuisine) ? "bg-culinary hover:bg-culinary-dark" : ""}`}
                        onClick={() => toggleCuisine(cuisine)}
                      >
                        {cuisine}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  <span className="font-medium">Sort By:</span>
                </div>
                <div className="flex overflow-x-auto gap-3">
                  {[
                    { id: "recommended", name: "Recommended" },
                    { id: "rating", name: "Rating" },
                    { id: "delivery-time", name: "Delivery Time" },
                    { id: "cost-low-to-high", name: "Cost: Low to High" },
                    { id: "cost-high-to-low", name: "Cost: High to Low" },
                  ].map((sortOption) => (
                    <Button
                      key={sortOption.id}
                      variant={activeSort === sortOption.id ? "default" : "outline"}
                      className={`whitespace-nowrap ${activeSort === sortOption.id ? "bg-culinary hover:bg-culinary-dark" : ""}`}
                      onClick={() => setActiveSort(sortOption.id)}
                    >
                      {sortOption.id === activeSort && <SortAsc className="h-4 w-4 mr-1" />}
                      {sortOption.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg">{restaurant.name}</h3>
                        <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          {restaurant.rating}
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{restaurant.cuisine}</p>
                      <div className="flex items-center mt-4">
                        <Clock className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-gray-500 text-sm">{restaurant.deliveryTime} min</span>
                        <span className="text-gray-500 text-sm mx-2">•</span>
                        <span className="text-gray-500 text-sm">{restaurant.distance}</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-gray-600 text-sm">{restaurant.priceRange}</span>
                        <Button variant="outline" className="text-xs h-8">
                          <Utensils className="h-3 w-3 mr-1" /> View Menu
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Restaurants;
