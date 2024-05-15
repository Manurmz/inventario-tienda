import { useState } from 'react';
import propTypes from "prop-types";
import { useProductStore } from '../store/productStore';

const ProveedoresFormulario = ({ proveedor, id, handleSubmit }) => {

  const eliminarProveedor = useProductStore(state => state.eliminarProveedor)
  const [proveedorActual, setProveedorActual] = useState(proveedor);
  console.log(proveedor);
  const handleNombreProveedorChange = (e) => {
    setProveedorActual({
      ...proveedorActual,
      nombre_proveedor: e.target.value
    });
  };

  const handlePrecioCompraChange = (e) => {
    setProveedorActual({
      ...proveedorActual,
      precio_de_compra: e.target.value
    });
  };

  const handleUnidadesLoteChange = (e) => {
    setProveedorActual({
      ...proveedorActual,
      unidades_por_lote: e.target.value
    });
  };

  return (
    <>
      {/* Botón eliminar */}
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline absolute top-0 right-0"
        onClick={handleSubmit(()=>{
          console.log(proveedor.nombre_proveedor)
          eliminarProveedor(id,proveedor.nombre_proveedor)
        })}
      >
        X
      </button>
      <div className='mb-4'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`nombre_proveedor`}>
            Nombre del Proveedor
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`nombre_proveedor`}
            type="text"
            value={proveedorActual.nombre_proveedor}
            onChange={handleNombreProveedorChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`precio_de_compra`}>
            Precio de Compra
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`precio_de_compra`}
            type="number"
            value={proveedorActual.precio_de_compra}
            onChange={handlePrecioCompraChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`unidades_por_lote`}>
            Unidades por Lote
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`unidades_por_lote`}
            type="number"
            value={proveedorActual.unidades_por_lote}
            onChange={handleUnidadesLoteChange}
          />
        </div>
      </div>
    </>
  );
};

export default ProveedoresFormulario;

ProveedoresFormulario.propTypes = {
  proveedor: propTypes.object.isRequired,
  handleSubmit: propTypes.func.isRequired,
  id: propTypes.string
};
