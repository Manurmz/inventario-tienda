import { useForm } from 'react-hook-form'
import { categorias } from '../utils/categoria'

// import { crearProducto } from '../productos/productos'

import { useProductStore } from '../store/productStore.js'
import BotonRedireccion from '../components/BotonRedireccion.jsx'

const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm() 
  const addProduct = useProductStore((state) => state.addProduct) 

  const limpiar = () =>{
    reset()
  }

  const onSubmit = (data) => {
    let datos_corregidos = {
      "nombre": data.nombre,
      "descripcion": data.descripcion,
      "proveedores": [
        {
          "nombre_proveedor": data.nombre_proveedor,
          "precio_de_compra": Number(data.precio_de_compra),
          "unidades_por_lote": Number(data.unidades_por_lote)
        }
      ],
      "precio_de_venta": Number(data.precio_de_venta),
      "categoria": data.categoria,
      "unidades": Number(data.unidades),
      "aleta_stock": Number(data.aleta_stock),
      "stock_optimo": Number(data.stock_optimo),
      "anotaciones": data.anotaciones,
      "codigo": data.codigo
    }
    
    // crearProducto(datos_corregidos)
    addProduct(datos_corregidos)

    limpiar()
    
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <BotonRedireccion link="/" texto="Atras" />
        <div className="w-full max-w-md">
          <h1 className='text-xl my-2 px-3'>Agregar a inventario</h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="py-2 text-lg font-bold mb-2 text-gray-700">Producto</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text"  placeholder="Nombre" {...register('nombre',{
                required:true
              })}/>
              {
                errors.nombre?.type === 'required' && <p className='text-red-500' >El campo nombre es requedido</p> 
              }
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                Descripción
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="descripcion" type="text" placeholder="Descripción" {...register('descripcion',{
              required:true
              })}/>
              {
                errors.descripcion?.type === 'required' && <p className='text-red-500' >El campo descripcion es requedido</p> 
              }
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
                Precio de venta
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="precio" type="number" placeholder="Precio de venta" {...register('precio_de_venta',{
              required:true
              })}/>
              {
                errors.precio_venta?.type === 'required' && <p className='text-red-500' >El campo precio de venta es requedido</p> 
              }
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unidades">
                Unidades en stock
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="unidades" type="number" placeholder="Unidades en stock" {...register('unidades',{
              required:true
              })}/>
              {
                errors.unidades?.type === 'required' && <p className='text-red-500' >El campo unidades es requedido</p> 
              }
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">
              Categoría
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="categoria"
              {...register('categoria', {
                required: true
              })}
            >
              <option value="">Selecciona una categoría</option>
              {categorias.map((categoria, index) => (
                <option key={index} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
            {errors.categoria?.type === 'required' && (
              <p className='text-red-500' >El campo categoría es requerido</p>
            )}

            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unidades_alerta">
                Unidades Alerta de stock
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="unidades_alerta" type="number" placeholder="Unidades Alerta de stock" {...register('aleta_stock',{
              required:true
              })}/>
              {
                errors.unidades_alerta?.type === 'required' && <p className='text-red-500' >El campo unidades alerta de stock es requedido</p> 
              }
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock_optimo">
                Stock óptimo
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stock_optimo" type="number" placeholder="Stock óptimo" {...register('stock_optimo',{
              required:true
              })}/>
              {
                errors.stock_optimo?.type === 'required' && <p className='text-red-500' >El campo stock optimo es requedido</p> 
              }
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigo">
                Código de barras
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="codigo" type="text" placeholder="Código de barras" {...register('codigo')}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock_optimo">
                Anotaciones
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="anotaciones" type="text" placeholder="Anotaciones" {...register('anotaciones')}/>
            </div>
            <div className="border-2 px-3">
                <h3 className="py-2 text-lg font-bold mb-2 text-gray-700">Proveedores</h3>                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proveedor_nombre">
                  Nombre del proveedor
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proveedor_nombre" type="text" placeholder="Nombre del proveedor" {...register('nombre_proveedor',{
                required:true
                })}/>
                {
                  errors.nombre_proveedor?.type === 'required' && <p className='text-red-500' >El campo nombre de proveedor es requedido</p> 
                }
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio_compra">
                  Precio de compra
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="precio_compra" type="number" placeholder="Precio de compra" {...register('precio_de_compra',{
                required:true
                })}/>
                {
                  errors.precio_compra?.type === 'required' && <p className='text-red-500' >El campo precio de compra es requedido</p> 
                }
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unidades_lote">
                  Unidades por lote
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="unidades_lote" type="number" placeholder="Unidades por lote" {...register('unidades_por_lote',{
                required:true
                })}/>
                {
                  errors.unidadesxlote?.type === 'required' && <p className='text-red-500' >El campo unidades por lote es requedido</p> 
                }
              </div>

            </div>
            <div className="flex justify-between mb-4 py-4">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={limpiar}>
                Limpiar
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
