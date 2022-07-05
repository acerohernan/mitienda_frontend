import produce from 'immer';
import { ChangeEvent, useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { VscClose } from 'react-icons/vsc';
import CustomTextInput from '../../../../components/form/textInput';
import { IVariantOption } from '../../../../interfaces/product.interface';

interface OptionItemProps {
  option: IVariantOption;
  onChange: (option: IVariantOption) => void;
  handleDelete: () => void;
}

const OptionItem: React.FC<OptionItemProps> = ({
  option,
  onChange,
  handleDelete,
}) => {
  const [optionState, setOptionState] = useState<IVariantOption>(option);

  function handleShow() {
    setOptionState(
      produce(optionState, (state) => {
        state.show = !option.show;
      })
    );
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setOptionState(
      produce(optionState, (state) => {
        state.title = event.target.value;
      })
    );
  }

  function handlePriceChange(event: ChangeEvent<HTMLInputElement>) {
    setOptionState(
      produce(optionState, (state) => {
        state.price = event.target.value;
      })
    );
  }

  useEffect(() => {
    onChange(optionState);
  }, [optionState]);

  return (
    <div
      className={`grid grid-cols-[2fr_1px_1fr_1px_50px_1px_50px] mb-2 transition-all ${
        !option.show && 'opacity-50'
      }`}
    >
      <CustomTextInput
        inputProps={{
          disabled: !option.show,
          placeholder: 'Queso cheddar',
          value: option.title,
          name: 'title',
          onChange: handleNameChange,
        }}
      />
      <div className="flex items-center bg-slate-100">
        <div className="w-10 h-6 bg-gray-300" />
      </div>
      <CustomTextInput
        inputProps={{
          disabled: !option.show,
          placeholder: 'Precio',
          value: option.price,
          name: 'price',
          onChange: handlePriceChange,
        }}
      >
        <>$</>
      </CustomTextInput>
      <div className="flex items-center bg-slate-100">
        <div className="w-10 h-6 bg-gray-300" />
      </div>
      <button
        type="button"
        onClick={handleShow}
        className="w-full h-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-gray-700"
      >
        {option.show ? (
          <AiOutlineEye size={23} />
        ) : (
          <AiOutlineEyeInvisible size={23} />
        )}
      </button>
      <div className="flex items-center bg-slate-100">
        <div className="w-10 h-6 bg-gray-300" />
      </div>
      <button
        type="button"
        className="w-full h-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-gray-700"
        onClick={handleDelete}
      >
        <VscClose size={23} />
      </button>
    </div>
  );
};
export default OptionItem;
