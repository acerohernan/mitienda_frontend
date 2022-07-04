import { AiOutlineEye, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { VscClose } from 'react-icons/vsc';
import Checkbox from '../../../../components/form/checkbox';
import TextInputWithLabel from '../../../../components/form/inputWithLabel';
import CustomLabel from '../../../../components/form/label';
import Switch from '../../../../components/form/switch';
import CustomTextInput from '../../../../components/form/textInput';

interface NewProductModalProps {
  handleModal: (bool: boolean) => void;
}

const NewProductModal: React.FC<NewProductModalProps> = ({ handleModal }) => {
  return (
    <div className="w-full min-h-screen bg-black/30 absolute top-0 bottom-0 flex justify-end">
      <section className="bg-white relative w-full max-w-lg min-h-screen opacity-100 overflow-y-scroll">
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
            <button className="p-6 py-4 bg-slate-100 rounded-lg text-slate-400 text-4xl font-light border-dashed border border-gray-500 my-2">
              +
            </button>
            <span className="label-bottom">Tamaño recomendado 600x600</span>
          </div>
          <TextInputWithLabel
            labelText="Nombre"
            inputProps={{
              placeholder: 'Chaqueta de cuero vegetal',
              autoFocus: true,
            }}
          />
          <TextInputWithLabel
            labelText="Descripción"
            bottomMessage="Máximo 1400 caracteres"
            optional
            textarea
            inputProps={{
              placeholder: 'Chaqueta de cuero vegetal con apliques',
              maxLenght: 1400,
            }}
          />
          <TextInputWithLabel
            labelText="Tipo"
            inputProps={{
              placeholder: 'Disponible',
            }}
          />
          <TextInputWithLabel
            labelText="Precio"
            bottomMessage="Precio base"
            inputProps={{
              placeholder: '$ 5000',
            }}
          />
          <TextInputWithLabel
            labelText="Categoría"
            bottomMessage="Numera tus categorías para ordenarlas como quieras"
            inputProps={{
              placeholder: '$ 5000',
            }}
          />
          <Switch label="Destacar" selected />
          <div className="divider mt-4 mb-6" />
          <div>
            <CustomLabel text="Variantes" />
            <p className="text-sm font-light bg-gray-50 p-4">
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
            <VariantForm />
            <button className="bg-slate-100 w-full font-light p-2 pl-3 tansition-all ease-in-out hover:bg-slate-200 flex items-center justify-between mt-4 rounded-md mb-5">
              <span>Agregar variante</span>
              <AiOutlinePlus size={20} />
            </button>
          </div>

          <button className="button mt-2" onClick={() => handleModal(false)}>
            Agregar producto
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewProductModal;

const VariantForm = () => {
  return (
    <form>
      <div className="flex items-center w-full">
        <CustomTextInput
          inputProps={{
            placeholder: 'Adicionales',
          }}
        />

        <button
          className="bg-slate-100 hover:bg-slate-200 p-2 rounded-md ml-2"
          type="button"
        >
          <MdOutlineKeyboardArrowUp size={26} />
        </button>
      </div>
      <div className="mt-4">
        <Switch label="Obligatorio" selected />
        <span className="label-bottom mt-2">
          Al activarlo, el usuario deberá indicar su elección para continuar.
        </span>
      </div>
      <div className="mt-4">
        <CustomLabel text="¿Cuantás opciones podrá elegir?" />
        <div className="grid grid-cols-3 gap-2">
          <Checkbox>Una</Checkbox>
          <Checkbox>Ilimitadas</Checkbox>
          <Checkbox>
            <CustomTextInput
              inputProps={{
                className: 'text-field -my-2',
                type: 'number',
                placeholder: 'Definir',
              }}
            />
          </Checkbox>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-info mb-2">Opciones</span>
        <OptionItem />
        <OptionItem />
        <span className="label-bottom mb-4">
          El precio que ingreses se sumará al valor base del producto.
        </span>
        <button className="text-darkgreen400" type="button">
          + Agregar opción
        </button>
        <div className="divider mt-4 mb-6" />
      </div>
    </form>
  );
};

const OptionItem = () => {
  return (
    <div className="grid grid-cols-[2fr_1px_1fr_1px_50px_1px_50px] mb-2">
      <CustomTextInput
        inputProps={{
          placeholder: 'Queso cheddar',
        }}
      />
      <div className="flex items-center bg-slate-100">
        <div className="w-10 h-6 bg-gray-300" />
      </div>
      <CustomTextInput
        inputProps={{
          placeholder: 'Precio',
        }}
      >
        <>$</>
      </CustomTextInput>
      <div className="flex items-center bg-slate-100">
        <div className="w-10 h-6 bg-gray-300" />
      </div>
      <button
        type="button"
        className="w-full h-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-gray-700"
      >
        <AiOutlineEye size={23} />
      </button>
      <div className="flex items-center bg-slate-100">
        <div className="w-10 h-6 bg-gray-300" />
      </div>
      <button
        type="button"
        className="w-full h-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-gray-700"
      >
        <VscClose size={23} />
      </button>
    </div>
  );
};
