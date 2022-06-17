const AdminMenbership = () => {
  return (
    <div className="card border-darkgreen100 border-2">
      <h1 className="h3">Tu Plan</h1>
      <div className="flex items-center justify-between my-3 mb-4">
        <span className="bg-darkgreen100 text-darkgreen400 font-medium p-1">
          INICIAL
        </span>
        <button className="button-sm px-4 text-sm">Mejorar</button>
      </div>
      <div>
        <span>
          Cantidad máxima de productos:{' '}
          <span className="font-bold inline-block">100.</span>
        </span>
        <p className="font-light mt-2">
          Tienes actualización en tiempo real hasta el 13/6/2022 para que puedas
          cargar tu tienda, luego se actualizará automáticamente al Plan
          Gratuito.
        </p>
      </div>
    </div>
  );
};

export default AdminMenbership;
