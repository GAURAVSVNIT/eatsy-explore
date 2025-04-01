
import { Button } from "@/components/ui/button";

const CulinaryShowcase = () => {
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* First Showcase */}
          <div className="relative bg-black text-white rounded-xl overflow-hidden">
            <div className="absolute inset-0 opacity-80">
              <img
                src="https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?q=80&w=2376&auto=format&fit=crop"
                alt="Culinary Delights"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative p-8 lg:p-12 flex flex-col h-full">
              <h3 className="font-display text-3xl font-bold mb-3">Culinary Delights</h3>
              <p className="mb-6 text-gray-200">
                Experience the art of gastronomy with our specially curated fine dining options from top-rated restaurants.
              </p>
              <Button className="bg-culinary hover:bg-culinary-dark text-white w-fit mt-auto">
                Explore Fine Dining
              </Button>
            </div>
          </div>

          {/* Second Showcase */}
          <div className="relative bg-black text-white rounded-xl overflow-hidden">
            <div className="absolute inset-0 opacity-80">
              <img
                src="https://images.unsplash.com/photo-1529973625058-a665431328fb?q=80&w=2187&auto=format&fit=crop"
                alt="Dining Masterpiece"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative p-8 lg:p-12 flex flex-col h-full">
              <h3 className="font-display text-3xl font-bold mb-3">Dining Masterpiece</h3>
              <p className="mb-6 text-gray-200">
                Discover exclusive culinary creations crafted by award-winning chefs, delivering unforgettable taste experiences.
              </p>
              <Button className="bg-culinary hover:bg-culinary-dark text-white w-fit mt-auto">
                Discover Restaurants
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryShowcase;
