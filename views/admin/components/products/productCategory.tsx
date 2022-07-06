import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const ProductCategory = () => {
  return (
    <div className="w-full">
      <button className="flex items-center justify-between w-full py-4">
        <div className="flex items-center">
          <h6 className="h3 mr-2">Curso 1</h6>
          <span>(2)</span>
        </div>

        <FaChevronDown
          size={18}
          className={`transition-all ${false && 'rotate-180'}`}
        />
      </button>
      {false ? <div></div> : null}
    </div>
  );
};

export default ProductCategory;
