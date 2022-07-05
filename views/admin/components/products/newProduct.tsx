import produce from 'immer';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { VscClose, VscEdit, VscTrash } from 'react-icons/vsc';
import { toast } from 'react-toastify';
import API from '../../../../api';
import { CreateProductFormValues } from '../../../../api/store/types';
import Button from '../../../../components/form/button';
import TextInputWithLabel from '../../../../components/form/inputWithLabel';
import CustomLabel from '../../../../components/form/label';
import CustomSelect from '../../../../components/form/select';
import Switch from '../../../../components/form/switch';
import { PRODUCT_TYPES } from '../../../../constants/products';
import { IVariant } from '../../../../interfaces/product.interface';
import handleRequestError from '../../../../utils/error';
import VariantForm from './variantForm';

interface NewProductModalProps {
  handleModal: (bool: boolean) => void;
}

const NewProductModal: React.FC<NewProductModalProps> = ({ handleModal }) => {
  const [loading, setLoading] = useState(false);
  const [variants, setVariants] = useState<IVariant[]>([]);
  const [top, setTop] = useState(false);
  const [previewImg, setPreviewImg] = useState('');

  const fileInputRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateProductFormValues>();

  async function onSubmit(form: CreateProductFormValues) {
    setLoading(true);
    form.variants = variants;
    form.type = Number(form.type);
    try {
      await API.store.products.create(form);
      toast.success('Se creó correctamente el producto');
      setLoading(false);
      handleModal(false);
    } catch (e: any) {
      setLoading(false);
      const err = handleRequestError(e);
      toast.error(err);
    }
  }

  function handleAddVariant() {
    const newVariant: IVariant = {
      open: true,
      title: '',
      optional: true,
      toSelect: 1,
      options: [
        {
          title: '',
          price: '',
          show: true,
        },
        {
          title: '',
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

  function handleDeleteVariant(index: number) {
    return () =>
      setVariants(
        produce(variants, (state) => {
          state.splice(index, 1);
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

  function handleAddFile(event: ChangeEvent<HTMLInputElement>) {
    let files: any = event.currentTarget.files;
    let file = files[0];
    if (!file) return;
    setPreviewImg(URL.createObjectURL(file));
    setValue('img', file);
  }

  function handleDeleteFile() {
    setPreviewImg('');
    fileInputRef.current.value = null;
    setValue('img', null);
  }

  useEffect(() => {
    setValue('type', 1);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black/30 absolute top-0 bottom-0 flex justify-end">
      <form
        className="bg-white relative w-full max-w-lg min-h-screen opacity-100 overflow-y-scroll"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
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
          <div className="mt-10 mb-6">
            <span className="label mb-3">Imagen</span>
            {!previewImg ? (
              <label
                className="flex items-center w-40 h-40 justify-center bg-slate-100 rounded-lg text-slate-400 text-4xl font-light border-dashed border border-gray-500 my-2 cursor-pointer"
                htmlFor="image"
              >
                +
              </label>
            ) : (
              <div className="flex items-center mt-2">
                <div className="border border-dashed border-gray-500 w-40 h-40 rounded-md">
                  <Image
                    src={previewImg ? previewImg : '/images/landing/heart.svg'}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <label
                  className="p-2 ml-4 rounded-full bg-slate-50 hover:bg-slate-100 cursor-pointer"
                  htmlFor="image"
                >
                  <VscEdit size={23} />
                </label>
                <button
                  className="p-2 ml-2 rounded-full bg-slate-50 hover:bg-slate-100"
                  onClick={handleDeleteFile}
                >
                  <VscTrash size={23} />
                </button>
              </div>
            )}

            <input
              type="file"
              className="hidden"
              id="image"
              accept=".png, .jpg, .jpeg"
              onChange={handleAddFile}
              ref={fileInputRef}
            />
            <span className="label-bottom mt-2">
              Tamaño recomendado 600x600
            </span>
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
          <div className="mb-4">
            <CustomLabel text="Tipo" />
            <CustomSelect
              onChange={(option: number) => setValue('type', option)}
              options={Object.keys(PRODUCT_TYPES)}
              value={PRODUCT_TYPES[1]}
              optionsLabel={PRODUCT_TYPES}
            />
          </div>
          <TextInputWithLabel
            labelText="Precio"
            bottomMessage="Precio base"
            errorMsg={errors.price?.message}
            inputProps={{
              ...register('price', {
                required: 'Este campo es requerido',
              }),
              placeholder: '5000',
            }}
          >
            <>$</>
          </TextInputWithLabel>
          <TextInputWithLabel
            labelText="Categoría"
            bottomMessage="Numera tus categorías para ordenarlas como quieras"
            errorMsg={errors.category?.message}
            inputProps={{
              ...register('category', {
                required: 'Este campo es requerido',
              }),
              placeholder: 'Pantalones',
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
                  handleDeleteVariant={handleDeleteVariant(index)}
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

          <Button
            className="button mt-2"
            submit
            loading={loading}
            text="Agregar producto"
          />
        </div>
      </form>
    </div>
  );
};

export default NewProductModal;
