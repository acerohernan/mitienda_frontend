import ProductCard from './productCard';

interface CategorySectionProps {
  items: any;
  categoryName?: string;
  handleSelect: (id: number) => void;
  handleCloseSelect: () => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  items,
  handleSelect,
}) => {
  return (
    <div className="mt-12 text-start">
      <h3 className="h2">
        Ensaladas <span className="text-slate-600 inline-block">(3)</span>
      </h3>
      <div className="mt-4 lg:grid-cols-2 grid gap-8">
        {items.map((item: any, i: number) => (
          <ProductCard key={i} handleSelect={() => handleSelect(i)} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
