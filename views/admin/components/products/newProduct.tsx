import produce from 'immer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { VscClose } from 'react-icons/vsc';
import { CreateProductFormValues } from '../../../../api/store/types';
import TextInputWithLabel from '../../../../components/form/inputWithLabel';
import CustomLabel from '../../../../components/form/label';
import Switch from '../../../../components/form/switch';
import { IVariant } from '../../../../interfaces/product.interface';
import VariantForm from './variantForm';

interface NewProductModalProps {
  handleModal: (bool: boolean) => void;
}

const NewProductModal: React.FC<NewProductModalProps> = ({ handleModal }) => {
  const [variants, setVariants] = useState<IVariant[]>([]);
  const [top, setTop] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateProductFormValues>();

  function onSubmit(data: CreateProductFormValues) {
    data.variants = variants;
    console.log(data);
  }

  function handleAddVariant() {
    const newVariant: IVariant = {
      open: true,
      title: '',
      optional: true,
      toSelect: 1,
      options: [
        {
          name: '',
          price: '',
          show: true,
        },
        {
          name: '',
          price: '',
          show: true,
        },
      ],
    };

    setVariants(
      produce(variants, (state) => {
        state.push(newVariant);
      })
    );
  }

  function handleVariantData(index: number) {
    return (variantData: IVariant) =>
      setVariants(
        produce(variants, (state) => {
          state[index] = variantData;
        })
      );
  }

  function handleTopValue() {
    setTop(!top);
    setValue('top', !top);
  }

  return (
    <div className="w-full min-h-screen bg-black/30 absolute top-0 bottom-0 flex justify-end">
      <form
        className="bg-white relative w-full max-w-lg min-h-screen opacity-100 overflow-y-scroll"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex justify-end p-6">
          <button
            onClick={() => handleModal(false)}
            className="hover:bg-gray-100 transition-all p-1 rounded-md"
          >
            <VscClose size={32} />
          </button>
        </div>
        <div className="p-8 sm:p-10 pt-4 sm:pt-6">
          <h1 className="h1">Agregar producto</h1>
          <div className="mt-6 mb-6">
            <span className="label">Imagen</span>
            <button
              className="p-6 py-4 bg-slate-100 rounded-lg text-slate-400 text-4xl font-light border-dashed border border-gray-500 my-2"
              type="button"
            >
              +
            </button>
            <span className="label-bottom">Tamaño recomendado 600x600</span>
          </div>
          <TextInputWithLabel
            labelText="Nombre"
            errorMsg={errors.name?.message}
            inputProps={{
              ...register('name', {
                required: 'Este campo es requerido',
              }),
              placeholder: 'Chaqueta de cuero vegetal',
              autoFocus: true,
            }}
          />
          <TextInputWithLabel
            labelText="Descripción"
            bottomMessage="Máximo 1400 caracteres"
            optional
            textarea
            errorMsg={errors.description?.message}
            inputProps={{
              ...register('description', {
                maxLength: {
                  value: 1400,
                  message: 'Máximo 1400 caracteres',
                },
              }),
              placeholder: 'Chaqueta de cuero vegetal con apliques',
              maxlenght: 1400,
            }}
          />
          <TextInputWithLabel
            labelText="Tipo"
            errorMsg={errors.type?.message}
            inputProps={{
              ...register('type', {
                required: 'Este campo es requerido',
              }),
              placeholder: 'Disponible',
            }}
          />
          <TextInputWithLabel
            labelText="Precio"
            bottomMessage="Precio base"
            errorMsg={errors.price?.message}
            inputProps={{
              ...register('price', {
                required: 'Este campo es requerido',
              }),
              placeholder: '$ 5000',
            }}
          />
          <TextInputWithLabel
            labelText="Categoría"
            bottomMessage="Numera tus categorías para ordenarlas como quieras"
            errorMsg={errors.category?.message}
            inputProps={{
              ...register('category', {
                required: 'Este campo es requerido',
              }),
              placeholder: '$ 5000',
            }}
          />
          <Switch label="Destacar" selected={top} onChange={handleTopValue} />
          <div className="divider mt-4 mb-6" />
          <div>
            <CustomLabel text="Variantes" />
            <p className="text-sm font-light bg-gray-50 p-4 hidden">
              Las variantes permiten que el usuario pueda elegir tanto
              adicionales como variantes de un producto.
              <br />
              <br />
              Las variantes se componen de:
              <br />
              <br />
              <span className="inline font-normal">Título: </span>
              El nombre de la variante (ej: Salsa, Talle, Cantidad).
              <br />
              <br />
              <span className="inline font-normal">Cantidad: </span>Cuántas
              opciones puede elegir el usuario antes de agregar el producto al
              pedido.
              <br />
              <br />
              <span className="inline font-normal">Obligatoriedad: </span>Define
              si el usuario debe seleccionar la cantidad definida de opciones
              para poder agregar el producto al pedido.
              <br />
              <br />
              <span className="inline font-normal">Opciones: </span>Compuestas
              de un 'título': que indica el nombre de la opción (500GR, 1KG,
              etc). Y un precio que se sumará al valor base del producto (si el
              producto tiene un valor de $100 y la opción de $20, cuando el
              usuario seleccione esta opción el precio final será de $120).
              <br />
              <br />
              En caso de que el producto sea de tipo 'Variante', el precio de
              cada opción indicada será el total del valor del producto.
            </p>
            {variants.map((variant, index) => (
              <div className="mb-2" key={index}>
                <VariantForm
                  handleVariant={handleVariantData(index)}
                  variant={variant}
                />
              </div>
            ))}
            <button
              className="bg-slate-100 w-full font-light p-2 pl-3 tansition-all ease-in-out hover:bg-slate-200 flex items-center justify-between mt-4 rounded-md mb-5"
              onClick={handleAddVariant}
              type="button"
            >
              <span>Agregar variante</span>
              <AiOutlinePlus size={20} />
            </button>
          </div>

          <button className="button mt-2" type="submit">
            Agregar producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProductModal;
