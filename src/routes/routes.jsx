import Form from '../views/Form'
import Home from "../views/Home"
import MostrarInventario from "../views/MostrarInventario";
import EditarDatos from '../views/EditarDatos';
import TarjetaEditarDatos from "../views/TarjetasEditarDatos";
import EditarProveedores from '../views/EditarProveedores';
// import Prueba from '../views/Prueba';


const routes = [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/mostrar-inventario',
    element: <MostrarInventario/>
  },
  {
    path: '/agregar-producto',
    element: <Form/>
  },
  {
    path: '/editar-inventario',
    element: <TarjetaEditarDatos/>
  },
  {
    path: '/editar-inventario/:nombre',
    element: <EditarDatos/>
  },
  {
    path: '/editar-inventario/:nombre/proveedores',
    element: <EditarProveedores/>
  }
]

export default routes