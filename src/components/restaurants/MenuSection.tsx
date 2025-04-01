
import MenuItem from "./MenuItem";

interface MenuSectionProps {
  title: string;
  description?: string;
  items: {
    id: number;
    name: string;
    description: string;
    price: number;
    image?: string;
    isVeg: boolean;
    isSpicy?: boolean;
    isBestseller?: boolean;
    isNew?: boolean;
  }[];
}

const MenuSection = ({ title, description, items }: MenuSectionProps) => {
  return (
    <div className="mb-10">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-display font-bold">{title}</h2>
        {description && <p className="text-gray-500 mt-1">{description}</p>}
        <p className="text-gray-500 mt-1">{items.length} items</p>
      </div>
      <div className="space-y-6">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
