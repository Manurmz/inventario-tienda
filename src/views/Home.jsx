import BotonVista from "../components/BotonVista";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/productStore"

const Home = () => {
  const inicializarProductosStore = useProductStore(state => state.setProducts)
  inicializarProductosStore()
  return (
    <>
      <h3 className="text-center py-5 text-3xl font-medium">INVENTARIO</h3>
      <div className="grid grid-cols-2 justify-items-center md:w-2/3  mx-auto">
        <Link to="/mostrar-inventario" className="py-5 "><BotonVista>Mostrar inventario</BotonVista></Link>
        <Link to="/agregar-producto" className="py-5 "><BotonVista>Agregar producto</BotonVista></Link>
        <Link to="/editar-inventario" className="py-5 "><BotonVista>Editar inventario</BotonVista></Link>

      </div>
    </>
  ) 
};

export default Home;
