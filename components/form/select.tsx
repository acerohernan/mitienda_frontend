import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface SelectProps {
  options: string[];
  optionsLabel?: any;
  value: string;
  onChange: any;
  className?: string;
}

const CustomSelect: React.FC<SelectProps> = ({
  options,
  optionsLabel,
  className,
  onChange,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value ? value : '');

  function handleOpen() {
    return setOpen(!open);
  }

  return (
    <div className="relative">
      <div className="relative text-slate-600">
        <button
          className={`${className} appearance-none group text-start bg-slate-100 text-slate-600 font-medium text-lg p-2 w-full pl-3 border-2 border-white rounded ${
            open && 'border-green-800'
          }`}
          onClick={handleOpen}
          type="button"
        >
          {selected ? selected : 'Selecciona un país'}
        </button>
        <FaChevronDown
          size={22}
          className={`absolute top-1/4 right-3 transition-all text-darkgreen400 ${
            open && 'rotate-180'
          }`}
        />
      </div>
      {open && (
        <div className="absolute top-100 w-full max-h-56 overflow-y-scroll z-10">
          {options.map((option, i) => (
            <button
              key={i}
              className="w-full border-t-white p-2 px-4 text-slate-600 font-light bg-slate-50 text-start text-sm border hover:bg-darkgreen100"
              type="button"
              onClick={() => {
                handleOpen();
                setSelected(optionsLabel ? optionsLabel[option] : option);
                onChange(option);
              }}
            >
              {optionsLabel ? optionsLabel[option] : option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
