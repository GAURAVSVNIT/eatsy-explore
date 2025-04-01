
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantHeader from "@/components/restaurants/RestaurantHeader";
import MenuSection from "@/components/restaurants/MenuSection";
import ReservationForm from "@/components/restaurants/ReservationForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Search, Star, Clock, Info, ShoppingCart } from "lucide-react";

const restaurant = {
  name: "Artisan Bistro",
  image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2274&auto=format&fit=crop",
  cuisine: "Fine Dining, European",
  rating: 4.8,
  reviewCount: 1250,
  deliveryTime: "30-45",
  distance: "2.5 km",
  address: "123 Gourmet Street, Foodville",
  contact: "+1 234-567-8910",
  isVeg: false,
};

const menuCategories = [
  {
    id: "recommended",
    title: "Recommended",
  },
  {
    id: "starters",
    title: "Starters & Appetizers",
  },
  {
    id: "main-course",
    title: "Main Course",
  },
  {
    id: "desserts",
    title: "Desserts",
  },
  {
    id: "beverages",
    title: "Beverages",
  },
];

const recommendedItems = [
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    description: "Creamy Arborio rice with wild mushrooms and black truffle oil",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1673082797735-e077a29d48c0?q=80&w=2574&auto=format&fit=crop",
    isVeg: true,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Pan-Seared Salmon",
    description: "Atlantic salmon with lemon butter sauce, served with seasonal vegetables",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2670&auto=format&fit=crop",
    isVeg: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: "Artisan Beef Wellington",
    description: "Prime beef tenderloin wrapped in puff pastry with mushroom duxelles",
    price: 32.99,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2574&auto=format&fit=crop",
    isVeg: false,
    isSpicy: false,
  },
  {
    id: 4,
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla ice cream",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2574&auto=format&fit=crop",
    isVeg: true,
  },
];

const starterItems = [
  {
    id: 5,
    name: "Artisan Cheese Platter",
    description: "Selection of fine cheeses with fruits, nuts, and crackers",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2670&auto=format&fit=crop",
    isVeg: true,
  },
  {
    id: 6,
    name: "Crispy Calamari",
    description: "Lightly battered calamari served with garlic aioli",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=2574&auto=format&fit=crop",
    isVeg: false,
    isSpicy: true,
  },
  {
    id: 7,
    name: "Bruschetta Trio",
    description: "Classic tomato basil, mushroom truffle, and olive tapenade bruschetta",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=2574&auto=format&fit=crop",
    isVeg: true,
    isNew: true,
  },
];

const mainCourseItems = [
  {
    id: 8,
    name: "Filet Mignon",
    description: "8oz prime beef tenderloin with red wine reduction",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2670&auto=format&fit=crop",
    isVeg: false,
  },
  {
    id: 9,
    name: "Vegetable Wellington",
    description: "Roasted vegetables and goat cheese wrapped in puff pastry",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1673349298270-d414249ebb9f?q=80&w=2670&auto=format&fit=crop",
    isVeg: true,
    isNew: true,
  },
];

const dessertItems = [
  {
    id: 10,
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar top",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2670&auto=format&fit=crop",
    isVeg: true,
    isBestseller: true,
  },
];

const beverageItems = [
  {
    id: 11,
    name: "Signature Mojito",
    description: "Fresh mint, lime, and premium white rum",
    price: 8.99,
    isVeg: true,
  },
  {
    id: 12,
    name: "Artisan Espresso",
    description: "Double shot of organic espresso",
    price: 4.99,
    isVeg: true,
  },
];

const RestaurantDetail = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(2);
  const [activeTab, setActiveTab] = useState("menu");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pb-24">
        <RestaurantHeader restaurant={restaurant} />
        
        <div className="container max-w-7xl mx-auto px-4 mt-6">
          <div className="flex mb-6">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for dishes..."
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-culinary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="ml-4 flex items-center">
              <Button variant="outline" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>4.8</span>
              </Button>
              <Button variant="outline" className="ml-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>30-45 min</span>
              </Button>
              <Button variant="outline" className="ml-2">
                <Info className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mb-6">
            <TabsList className="w-full max-w-md">
              <TabsTrigger 
                className="flex-1" 
                value="menu" 
                onClick={() => setActiveTab("menu")}
                data-state={activeTab === "menu" ? "active" : ""}
              >
                Menu
              </TabsTrigger>
              <TabsTrigger 
                className="flex-1" 
                value="reservation" 
                onClick={() => setActiveTab("reservation")}
                data-state={activeTab === "reservation" ? "active" : ""}
              >
                Book a Table
              </TabsTrigger>
              <TabsTrigger 
                className="flex-1" 
                value="reviews" 
                onClick={() => setActiveTab("reviews")}
                data-state={activeTab === "reviews" ? "active" : ""}
              >
                Reviews
              </TabsTrigger>
            </TabsList>
          </div>
          
          {activeTab === "menu" && (
            <div className="flex gap-6">
              <div className="hidden lg:block w-1/4">
                <ScrollArea className="h-[600px] pr-4">
                  <TabsList className="flex flex-col w-full bg-transparent h-auto">
                    {menuCategories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="justify-start py-3 px-4 text-left data-[state=active]:bg-gray-100 data-[state=active]:text-culinary"
                      >
                        {category.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </ScrollArea>
              </div>
              
              <div className="w-full lg:w-3/4 border-l pl-6">
                <Tabs defaultValue="recommended">
                  <TabsContent value="recommended">
                    <MenuSection
                      title="Recommended"
                      description="The most ordered items and dishes from this restaurant"
                      items={recommendedItems}
                    />
                  </TabsContent>
                  
                  <TabsContent value="starters">
                    <MenuSection
                      title="Starters & Appetizers"
                      items={starterItems}
                    />
                  </TabsContent>
                  
                  <TabsContent value="main-course">
                    <MenuSection
                      title="Main Course"
                      items={mainCourseItems}
                    />
                  </TabsContent>
                  
                  <TabsContent value="desserts">
                    <MenuSection
                      title="Desserts"
                      items={dessertItems}
                    />
                  </TabsContent>
                  
                  <TabsContent value="beverages">
                    <MenuSection
                      title="Beverages"
                      items={beverageItems}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )}
          
          {activeTab === "reservation" && (
            <div className="max-w-md mx-auto">
              <ReservationForm restaurantName={restaurant.name} />
            </div>
          )}
          
          {activeTab === "reviews" && (
            <div className="border rounded-lg p-6 bg-white">
              <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
              <p className="text-gray-500">Reviews coming soon...</p>
            </div>
          )}
        </div>
      </main>
      
      {activeTab === "menu" && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg py-3 px-4">
          <div className="container max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <span className="font-medium">{cartItems} Items</span>
              <span className="mx-2">|</span>
              <span className="font-medium">$42.98</span>
            </div>
            <Button className="bg-culinary hover:bg-culinary-dark">
              <ShoppingCart className="h-4 w-4 mr-2" />
              View Cart
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default RestaurantDetail;
