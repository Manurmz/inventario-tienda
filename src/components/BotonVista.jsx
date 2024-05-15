
import PropTypes from 'prop-types';

function BotonVista({children}){
  return (
    <>
      <div className="inline-flex items-center justify-center w-44 px-3 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
        {children}
      </div>
    </>   
  )
}

BotonVista.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BotonVista;

