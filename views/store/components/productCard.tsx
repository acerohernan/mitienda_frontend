import Image from 'next/image';

interface ProductCardProps {
  handleSelect: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ handleSelect }) => {
  return (
    <button
      className="border-2 text-start border-gray-100 rounded-md grid grid-cols-[auto_150px]"
      onClick={handleSelect}
    >
      <div className="p-4 flex flex-col justify-between">
        <div className="">
          <h6>Ensalada Caprezanella</h6>
          <p className="line-clamp-2 text-sm text-slate-600 mt-1">
            Tomate, pepino, cebolla roja, mozzarella fresca, picatostes,
            albahaca y vinagreta de vino tinto.
          </p>
        </div>
        <span className="text-darkgreen400 text-sm">$ 300,00</span>
      </div>
      <Image
        src="/images/store/salad-gourmet.jpg"
        width={150}
        height={150}
        objectFit="cover"
        className="rounded-r-md"
      />
    </button>
  );
};

export default ProductCard;
