import { useState } from "react";
import Tarjeta from "../components/Tarjeta";
import { useProductStore } from "../store/productStore";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BotonRedireccion from "../components/BotonRedireccion";




const TarjetaEditarDatos = () => {
  const obtenerProductos = useProductStore((state) => state.products);
  const [datos,setDatos] = useState(obtenerProductos)  
  const handleChange = (e) =>{
    let datos_filtrados = obtenerProductos.filter(dato => dato.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
    setDatos(datos_filtrados)
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <BotonRedireccion link="/" texto="Home" />
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="px-4"/>
          <input type="text" className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5" onChange={handleChange}/>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {datos.map((producto,key)=>{
            return(
              <Tarjeta producto={producto} key={key} />
            ) 
          })}
        </div>
      </div>
    </>
  )
};

export default TarjetaEditarDatos;
