import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Tarjeta = ({ producto }) => {
  const navigate = useNavigate();
  // console.log(producto);
  const abirEditor = () => {
    navigate(`/editar-inventario/${producto.nombre}`)
    // navigate('/prueba/14')
  }
  return (
    <>
      <div className='border-2 border-black py-2 px-6 rounded-md' onClick={abirEditor}>
        <div className="flex flex-col mb-2">
          <span className="bg-green-300 rounded-md px-2 py-1 font-bold mb-1 text-left">Nombre:</span>
          <span className="px-2">{producto.nombre}</span>
        </div>
        <div className="mb-2 px-2">
          <span className="font-bold">Precio:</span> ${producto.precio_de_venta.toFixed(2)}
        </div>
        <div className="mb-2 px-2">
          <span className="font-bold">Unidades:</span> {producto.unidades}
        </div>
      </div>
    </>
  );
};

Tarjeta.propTypes = {
  producto: propTypes.object
};

export default Tarjeta;
