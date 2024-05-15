import propTypes from "prop-types";

const Modal = ({dataModal, showModal}) => {
  const cerrarModal = () => {
    showModal(false);
  }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white w-9/12 min-h-64 p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Detalles del Producto</h1>
            <p><span className="font-bold">Nombre:</span> {dataModal.nombre}</p>
            <p><span className="font-bold">Precio de Venta:</span> ${dataModal.precio_de_venta}</p>
            <p><span className="font-bold">Descripción:</span><br/> {dataModal.descripcion}</p>
            <p><span className="font-bold">Categoría:</span> {dataModal.categoria}</p>
            <p><span className="font-bold">Unidades:</span> {dataModal.unidades}</p>
            <p><span className="font-bold">Aleta de Stock:</span> {dataModal.aleta_stock}</p>
            <p><span className="font-bold">Stock Óptimo:</span> {dataModal.stock_optimo}</p>
            <p><span className="font-bold">Anotaciones:</span> {dataModal.anotaciones}</p>
            <h2 className="text-xl font-bold mt-4 mb-2">Proveedores:</h2>
            <div className="overflow-y-auto max-h-48 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300"> {/* Estilo para activar el scroll */}
              {dataModal.proveedores.map((proveedor, index) => (
                <div key={index} className="border-b pb-2">
                  <p><span className="font-bold">Proveedor:</span> {proveedor.nombre_proveedor}</p>
                  <p><span className="font-bold">Unidades por Lote:</span> {proveedor.unidades_por_lote}</p>
                  <p><span className="font-bold">Precio de Compra:</span> ${proveedor.precio_de_compra}</p>
                  <p><span className="font-bold">Precio unitario:</span> ${(proveedor.precio_de_compra/proveedor.unidades_por_lote).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <button onClick={cerrarModal} className="bg-red-600 text-white mt-4 px-4 py-2 rounded-md m-auto block">
              Cerrar
            </button>
          </div>
        </div>
    </>
  )
};

Modal.propTypes = {
  dataModal: propTypes.object,
  showModal: propTypes.func
}

export default Modal;
