
import { Utensils, Pizza, Coffee, Cake, Salad, Beef, Fish, Sandwich } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Fine Dining",
    icon: <Utensils className="h-6 w-6" />,
    path: "/category/fine-dining",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 2,
    name: "Pizza",
    icon: <Pizza className="h-6 w-6" />,
    path: "/category/pizza",
    color: "bg-red-100 text-red-600",
  },
  {
    id: 3,
    name: "Coffee & Tea",
    icon: <Coffee className="h-6 w-6" />,
    path: "/category/coffee",
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 4,
    name: "Desserts",
    icon: <Cake className="h-6 w-6" />,
    path: "/category/desserts",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 5,
    name: "Healthy",
    icon: <Salad className="h-6 w-6" />,
    path: "/category/healthy",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 6,
    name: "Steak",
    icon: <Beef className="h-6 w-6" />,
    path: "/category/steak",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 7,
    name: "Seafood",
    icon: <Fish className="h-6 w-6" />,
    path: "/category/seafood",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 8,
    name: "Fast Food",
    icon: <Sandwich className="h-6 w-6" />,
    path: "/category/fast-food",
    color: "bg-yellow-100 text-yellow-600",
  },
];

const FoodCategories = () => {
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-heading">What are you craving?</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="flex flex-col items-center text-center p-4 rounded-lg hover-card"
            >
              <div className={`rounded-full p-4 ${category.color} mb-3`}>
                {category.icon}
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
