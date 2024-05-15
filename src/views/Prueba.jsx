import { useParams } from "react-router-dom";
import BotonTarjetas from "../components/BotonTarjetas";

const Prueba = () => {
  let { producto } = useParams();
  console.log(producto);
  return (
    <>
      <BotonTarjetas/>
      <h1>prueba perros</h1>
    </>
  )
};

export default Prueba;