
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image?: string;
    isVeg: boolean;
    isSpicy?: boolean;
    isBestseller?: boolean;
    isNew?: boolean;
  };
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className="flex justify-between border-b pb-6 mb-6 last:border-0">
      <div className="flex-1 pr-4">
        <div className="flex items-center mb-1">
          {item.isVeg ? (
            <Badge variant="outline" className="mr-2 border-green-500">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
              Veg
            </Badge>
          ) : (
            <Badge variant="outline" className="mr-2 border-red-500">
              <span className="h-2 w-2 rounded-full bg-red-500 mr-1"></span>
              Non-veg
            </Badge>
          )}
          {item.isBestseller && (
            <Badge className="bg-amber-500 mr-2">Bestseller</Badge>
          )}
          {item.isNew && <Badge className="bg-blue-500 mr-2">New</Badge>}
          {item.isSpicy && <Badge className="bg-red-500">Spicy</Badge>}
        </div>
        <h3 className="font-medium text-lg">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1">${item.price.toFixed(2)}</p>
        <p className="text-gray-500 text-sm mt-3 line-clamp-2">
          {item.description}
        </p>
      </div>
      <div className="relative min-w-28 h-28">
        {item.image ? (
          <>
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-md"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
              <Button size="sm" className="bg-white text-black border shadow-md hover:bg-gray-100">
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center w-28 h-28 bg-gray-100 rounded-md">
            <Button size="sm" className="bg-white text-black border shadow-md hover:bg-gray-100">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
