import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/productStore";
import { useForm } from "react-hook-form";
import { arrayToObject, objectToArray } from "../utils/array2object";
import BotonRedireccion from "../components/BotonRedireccion";
import ModalConfirmacion from '../components/ModalConfirmacion';

const EP = () => {
  const { nombre } = useParams();
  const producto = useProductStore((state) => state.products).find(
    (p) => p.nombre === nombre
  );
  const { proveedores } = producto;
  const agregarProveedor = useProductStore((state) => state.agregarProveedor);

  const [obj,setObj] = useState(arrayToObject(proveedores))

  const { register, handleSubmit } = useForm({
    defaultValues: obj,
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(objectToArray(data));
  };

  const [modal,setModal] = useState(false)
  const [datos,setDatos] = useState({})

  useEffect(() => {
    setObj(arrayToObject(proveedores))
    console.log(obj);
    
  },[modal])

  const showModal = (valor) => {
    setModal(valor)
  }

  const handleDeleteProveedor = (key) => {
    // Eliminar el proveedor correspondiente
    setDatos({
      id: producto.id,
      nombre: producto.proveedores[key].nombre_proveedor
    })
    console.log(datos);
    console.log(key);
    showModal(true)
    // console.log(producto.proveedores[key]);
    // console.log(producto.id);
    // eliminarProveedor(producto.id,producto.proveedores[key].nombre_proveedor);

  };

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <BotonRedireccion
          link={`/editar-inventario/${nombre}`}
          texto={`Editar ${nombre}`}
        />
        <div className="w-full max-w-md">
          <h1>Proveedores de {nombre}</h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {proveedores.map((p, key) => {    
              return (
                <div key={key} className="border-2 p-2 mb-4 relative">
                  <button
                    className="absolute top-0 right-0 bg-red-500 text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline mr-2"
                    onClick={handleSubmit(() => handleDeleteProveedor(key))}
                  >
                    X
                  </button>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={`nombre_proveedor_${key}`}
                    >
                      Nombre del proveedor {key + 1}
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`nombre_proveedor_${key}`}
                      {...register(`nombre_proveedor_${key}`)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={`precio_de_compra_${key}`}
                    >
                      Precio de compra {key + 1}
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`precio_de_compra_${key}`}
                      {...register(`precio_de_compra_${key}`)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={`unidades_por_lote_${key}`}
                    >
                      Unidades por lote {key + 1}
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`unidades_por_lote_${key}`}
                      {...register(`unidades_por_lote_${key}`)}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-4"
                onClick={
                  handleSubmit(() =>
                    agregarProveedor(producto.id, {
                      nombre_proveedor: "",
                      precio_de_compra: "",
                      unidades_por_lote: "",
                    })
                  )
                }
              >
                + Agregar Proveedor
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                type="submit"
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
      {modal && <ModalConfirmacion showModal={showModal} datos={datos} />}
    </>
  );
};

export default EP;
