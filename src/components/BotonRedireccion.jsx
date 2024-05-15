import { Link } from "react-router-dom";
import propTypes from "prop-types";

const BotonRedireccion = ({link,texto}) => {
  return (
    <>
      <button className="self-start bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline left-0 top-0 my-4 ml-4">
            <Link to={link}>{texto}</Link>
          </button>
    </>
  )
};

BotonRedireccion.propTypes = {
  link: propTypes.string.isRequired,
  texto: propTypes.string.isRequired
}

export default BotonRedireccion;

