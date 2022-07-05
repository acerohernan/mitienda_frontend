import produce from 'immer';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import Checkbox from '../../../../components/form/checkbox';
import CustomLabel from '../../../../components/form/label';
import Switch from '../../../../components/form/switch';
import CustomTextInput from '../../../../components/form/textInput';
import {
  IVariant,
  IVariantOption,
} from '../../../../interfaces/product.interface';
import OptionItem from './optionItem';

interface VariantFormProps {
  handleVariant: (variant: IVariant) => void;
  variant: IVariant;
}

const VariantForm: React.FC<VariantFormProps> = ({
  handleVariant,
  variant,
}) => {
  const [variantState, setVariantState] = useState<IVariant>(variant);

  const toSelectInputRef = useRef<any>(null);

  function handleOpenForm() {
    setVariantState(
      produce(variantState, (state) => {
        state.open = !variant.open;
      })
    );
  }

  function handleOptionalForm() {
    setVariantState(
      produce(variantState, (state) => {
        state.optional = !variant.optional;
      })
    );
  }

  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setVariantState(
      produce(variantState, (state) => {
        state.title = event.target.value;
      })
    );
  }

  function handleToSelect(toSelect: number) {
    return () =>
      setVariantState(
        produce(variantState, (state) => {
          state.toSelect = toSelect;
        })
      );
  }

  function handleAddOption() {
    const newOption: IVariantOption = {
      name: '',
      price: '',
      show: true,
    };

    setVariantState(
      produce(variantState, (state) => {
        state.options.push(newOption);
      })
    );
  }

  function handleDeleteOption(index: number) {
    return () =>
      setVariantState(
        produce(variantState, (state) => {
          state.options.splice(index, 1);
        })
      );
  }

  function handleUpdateOption(index: number) {
    return (option: IVariantOption) =>
      setVariantState(
        produce(variantState, (state) => {
          state.options[index] = option;
        })
      );
  }

  useEffect(() => {
    handleVariant(variantState);
  }, [variantState]);

  return (
    <div>
      <div className="flex items-center w-full">
        <CustomTextInput
          inputProps={{
            placeholder: 'Adicionales',
            onChange: handleChangeTitle,
            value: variant.title,
          }}
        />

        <button
          className="bg-slate-100 hover:bg-slate-200 p-2 rounded-md ml-2"
          type="button"
          onClick={handleOpenForm}
        >
          {variant.open ? (
            <MdOutlineKeyboardArrowUp size={26} />
          ) : (
            <MdOutlineKeyboardArrowDown size={26} />
          )}
        </button>
      </div>
      {variant.open ? (
        <>
          <div className="mt-4">
            <Switch
              label="Obligatorio"
              selected={variant.optional}
              onChange={handleOptionalForm}
            />
            <span className="label-bottom mt-2">
              Al activarlo, el usuario deberá indicar su elección para
              continuar.
            </span>
          </div>
          <div className="mt-4">
            <CustomLabel text="¿Cuantás opciones podrá elegir?" />
            <div className="grid grid-cols-3 gap-2">
              <Checkbox
                onChange={handleToSelect(1)}
                checked={variant.toSelect === 1}
              >
                Una
              </Checkbox>
              <Checkbox
                onChange={handleToSelect(999)}
                checked={variant.toSelect === 999}
              >
                Ilimitadas
              </Checkbox>
              <Checkbox
                onChange={() => toSelectInputRef.current.focus()}
                checked={variant.toSelect !== 999 && variant.toSelect !== 1}
              >
                <CustomTextInput
                  inputProps={{
                    className: 'text-field -my-2',
                    ref: toSelectInputRef,
                    type: 'number',
                    placeholder: 'Definir',
                    onChange: (event: ChangeEvent<HTMLInputElement>) => {
                      let num = Number(event?.currentTarget.value);
                      num = num === 0 ? 1 : num;
                      handleToSelect(num)();
                    },
                  }}
                />
              </Checkbox>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-info mb-2">Opciones</span>
            {variant.options.map((option, i) => (
              <OptionItem
                onChange={handleUpdateOption(i)}
                handleDelete={handleDeleteOption(i)}
                key={i}
                option={option}
              />
            ))}
            <span className="label-bottom mb-4">
              El precio que ingreses se sumará al valor base del producto.
            </span>
            <button
              className="text-darkgreen400"
              type="button"
              onClick={handleAddOption}
            >
              + Agregar opción
            </button>
            <div className="divider mt-4 mb-6" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default VariantForm;
