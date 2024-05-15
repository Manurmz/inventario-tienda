import {create} from 'zustand'
import { obtenerProductos, crearProducto, actualizarProducto } from '../productos/productos'
import { devtools } from 'zustand/middleware' 

export const useProductStore = create(
    devtools((set) => ({
      products: [],
      // product: (nombre) => this.products.find(p=>p.nombre === nombre),
      setProducts: async () => {
        const res = await obtenerProductos()
        set({products: res})
      },
      addProduct: async (product) => {
        const res = await crearProducto(product)
        set((state) => ({products: [...state.products, res]}))
        return res;
      },
      updateProduct: (product) => {
        set((state) => ({
          products: state.products.map((p) => (p.id === product.id ? product : p))}))
          actualizarProducto(product)
        },
      UpdateProveedor: (proveedores, id) => 
        set((state) => ({
          products: state.products.map((producto) =>
            producto.id === id
              ? {...producto, proveedores: proveedores } : producto)
        })),
    })))

