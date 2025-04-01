
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Restaurants", path: "/restaurants" },
    { name: "Cuisines", path: "/cuisines" },
    { name: "Offers", path: "/offers" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <span className="font-display text-2xl font-bold">
              Eatsy<span className="text-culinary">.</span>
            </span>
          </Link>

          {!isMobile && (
            <div className="hidden md:flex items-center gap-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-600 hover:text-culinary transition duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              className="w-64 px-4 py-2 rounded-full border focus:outline-none focus:ring-1 focus:ring-culinary"
              placeholder="Search for food or restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute top-2.5 right-3 h-5 w-5 text-gray-400" />
          </div>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col py-4 gap-4">
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-1 focus:ring-culinary"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute top-2.5 right-3 h-5 w-5 text-gray-400" />
                  </div>

                  {navigationLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="py-2 text-lg text-gray-600 hover:text-culinary transition duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="flex gap-4 mt-6">
                    <Button variant="outline" className="flex gap-2 flex-1">
                      <ShoppingCart className="h-4 w-4" />
                      Cart
                    </Button>
                    <Button variant="outline" className="flex gap-2 flex-1">
                      <User className="h-4 w-4" />
                      Account
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
