import { useParams } from "react-router-dom";
import { useProductStore } from "../store/productStore";
import { useForm, useFieldArray } from "react-hook-form";
import { useState, useEffect } from "react";
import BotonRedireccion from "../components/BotonRedireccion";
import ModalConfirmacion from "../components/ModalConfirmacion";
import { useRef } from "react";

const EditarProveedores = () => {
  const { nombre } = useParams();
  const producto = useProductStore(state => state.products).find(p => p.nombre === nombre);
  const actualizarProveedor = useProductStore(state => state.UpdateProveedor);
  const actualizarProducto = useProductStore(state => state.updateProduct);
  const { proveedores } = producto;

  const primerRender = useRef(true)

  useEffect(() => {
    if (primerRender.current) {
      primerRender.current = false;
      return;
    }
    actualizarProducto(producto);
    console.log('actualizado');
  }, [producto]);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      proveedores: proveedores
    }
  });

  const { fields, append, remove } = useFieldArray({
    name: "proveedores",
    control
  });

  const onSubmit = (data) => {
    // console.log(data.proveedores);
    actualizarProveedor(data.proveedores,producto.id);
  }

  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(null);

  const showModal = (valor) => {
    setModal(valor);
  }

  const confirmar = (valor) => {
    valor? remove(index) : null;    

  }

  const eliminarProveedor = (value) => {
    setModal(true);
    setIndex(value);
    // console.log('Eliminar proveedor: ', value);  
  }
  
  return (
    <>
      {modal && <ModalConfirmacion showModal={showModal} confirmar={confirmar} />}
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
            {fields.map((field, index) => (
              <section key={field.id} className="border-2 p-2 mb-4">
                <button
                  className="bg-red-500 text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline float-right"
                  type="button"
                  onClick={() => eliminarProveedor(index)}
                >
                  X
                </button>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`proveedores.${index}.nombre_proveedor`}
                  >
                    Nombre del proveedor {index + 1}
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={`proveedores.${index}.nombre_proveedor`}
                    {...register(`proveedores.${index}.nombre_proveedor`)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`proveedores.${index}.precio_de_compra`}
                  >
                    Precio de compra {index + 1}
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={`proveedores.${index}.precio_de_compra`}
                    {...register(`proveedores.${index}.precio_de_compra`)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`proveedores.${index}.unidades_por_lote`}
                  >
                    Unidades por lote {index + 1}
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={`proveedores.${index}.unidades_por_lote`}
                    {...register(`proveedores.${index}.unidades_por_lote`)}
                  />
                </div>
              </section>
            ))}
            <div className="flex justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-4"
                onClick={handleSubmit(() => {
                  append({
                    nombre_proveedor: "",
                    precio_de_compra: "",
                    unidades_por_lote: ""
                  });
                })}
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
    </>
  )
};

export default EditarProveedores;
