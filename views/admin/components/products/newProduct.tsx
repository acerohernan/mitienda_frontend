import { VscClose } from 'react-icons/vsc';
import TextInputWithLabel from '../../../../components/form/fields/textinputWithLabel';

const NewProductModal = () => {
  return (
    <div className="w-full min-h-screen bg-black/30 absolute top-0 bottom-0 flex justify-end">
      <section className="bg-white relative w-full max-w-lg min-h-screen opacity-100 overflow-y-scroll">
        <div className="w-full flex justify-end px-6 pt-6">
          <button>
            <VscClose size={32} />
          </button>
        </div>
        <div className="p-8 sm:p-10">
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
            inputProps={{ placeholder: 'Chaqueta de cuero vegetal' }}
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
          <div className="w-full h-1 bg-transparent border-b" />
          <button className="button">Agregar producto</button>
        </div>
      </section>
    </div>
  );
};

export default NewProductModal;
