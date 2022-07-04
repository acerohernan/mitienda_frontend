import Image from 'next/image';
import { useState } from 'react';
import NewProductModal from './components/products/newProduct';

const AdminProductsScreen = () => {
  const [showModal, setShowModal] = useState(false);

  function handleModal(bool: boolean) {
    setShowModal(bool);
  }

  return (
    <>
      <section className="screen-fit px-2">
        <div className="card max-w-md mx-auto bg-darkgreen100 mt-2 md:mt-4 grid grid-cols-[auto_110px] gap-5">
          <div>
            <h1>Publica tu primer producto</h1>
            <p className="font-light mb-5">para comenzar a recibir pedidos.</p>
            <button
              className="button-sm px-4"
              onClick={() => handleModal(true)}
            >
              Agregar producto
            </button>
          </div>
          <Image
            src="/images/admin/cart.png"
            width={100}
            height={80}
            className="object-contain"
          />
        </div>
      </section>
      {showModal ? <NewProductModal handleModal={handleModal} /> : null}
    </>
  );
};

export default AdminProductsScreen;
