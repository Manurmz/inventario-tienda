import propTypes from 'prop-types';

const ModalConfirmacion = ({ showModal, confirmar}) => {
  const cerrarModal = () => {
    showModal(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-lg font-bold mb-4">¿Estás seguro de eliminar al proveedor?</h2>
          <div className="flex justify-center space-x-4">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => {
                // Aquí puedes manejar la lógica de eliminar al proveedor
                confirmar(true)
                cerrarModal()
              }}
            >
              Sí
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
              onClick={()=>{
                confirmar(false)
                cerrarModal()
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalConfirmacion;

ModalConfirmacion.propTypes = {
  showModal: propTypes.func.isRequired,
  confirmar: propTypes.func.isRequired,
};
