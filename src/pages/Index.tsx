
import HeroSection from "@/components/home/HeroSection";
import FoodCategories from "@/components/home/FoodCategories";
import FeaturedRestaurants from "@/components/home/FeaturedRestaurants";
import CulinaryShowcase from "@/components/home/CulinaryShowcase";
import AppPromotion from "@/components/home/AppPromotion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FoodCategories />
        <FeaturedRestaurants />
        <CulinaryShowcase />
        <AppPromotion />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
