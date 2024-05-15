import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProductStore } from '../store/productStore';
import { useForm } from 'react-hook-form';
import { categorias } from '../utils/categoria'
import BotonRedireccion from '../components/BotonRedireccion';
// import ProveedoresFormulario from '../components/ProveedoresFormulario';

const EditarDatos = () => {
  const { nombre } = useParams();
  const actualizarProducto = useProductStore( state => state.updateProduct )
  const productos = useProductStore((state) => state.products);
  const producto = productos.find((product) => product.nombre === nombre);
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: producto,
  });
  // console.log(typeof(handleSubmit));
  // console.log(producto.id);
  // Estado para rastrear los campos enfocados
  const [camposEnfocados, setCamposEnfocados] = useState({});

  // Función para manejar el enfoque de los campos
  const handleCampoFocus = (campo) => {
    if (!camposEnfocados[campo]) {
      setCamposEnfocados({
        ...camposEnfocados,
        [campo]: true,
      });
      // Limpia el valor del campo
      setValue(campo, '');
    }
  };

  const onSubmit = (data) => {
    // Lógica para enviar los datos actualizados
    console.log('Datos actualizados:', data);
    actualizarProducto(data);
  };

  const resetToDefault = () => {
    reset(producto);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <BotonRedireccion link="/editar-inventario" texto="Editar inventario"/>
        <div className="w-full max-w-md">
          <h1 className="text-xl my-2 px-3">Editar Datos</h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="py-2 text-lg font-bold mb-2 text-gray-700">Producto</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                {...register('nombre')}
                onFocus={() => handleCampoFocus('nombre')}
              />
            </div>
            {/* Descripción */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                Descripción
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="descripcion"
                type="text"
                {...register('descripcion')}
                onFocus={() => handleCampoFocus('descripcion')}
              />
            </div>
            {/* Precio de Venta */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio_de_venta">
                Precio de Venta
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="precio_de_venta"
                type="number"
                {...register('precio_de_venta')}
                onFocus={() => handleCampoFocus('precio_de_venta')}
              />
            </div>
            {/* Unidades */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unidades">
                Unidades
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="unidades"
                type="number"
                {...register('unidades')}
                onFocus={() => handleCampoFocus('unidades')}
              />
            </div>
            {/* Categoría */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">
                Categoría
              </label>
              <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="categoria"
              {...register('categoria')}
            >
              <option value="">Selecciona una categoría</option>
              {categorias.map((categoria, index) => (
                <option key={index} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
            </div>
            {/* Aleta de Stock */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aleta_stock">
                Aleta de Stock
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="aleta_stock"
                type="number"
                {...register('aleta_stock')}
                onFocus={() => handleCampoFocus('aleta_stock')}
              />
            </div>
            {/* Stock Óptimo */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock_optimo">
                Stock Óptimo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="stock_optimo"
                type="number"
                {...register('stock_optimo')}
                onFocus={() => handleCampoFocus('stock_optimo')}
              />
            </div>
            {/* Anotaciones */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="anotaciones">
                Anotaciones
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="anotaciones"
                type="text"
                {...register('anotaciones')}
                onFocus={() => handleCampoFocus('anotaciones')}
              />
            </div>
            {/* Proveedores */}
            <div className='border-2 p-4'>
              <h1>Proveedores:</h1>
              <Link to={`/editar-inventario/${producto.nombre}/proveedores`}>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-4">Modificar proveedores</button>
              </Link>
              {/* Botón agregar proveedor */}
              
            </div>

            <div className="flex justify-between mb-4 py-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
                onClick={resetToDefault}
              >
                Reset
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarDatos;
