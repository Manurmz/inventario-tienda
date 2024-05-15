// import { Link } from "react-router-dom";
import { useState } from "react";
import { useProductStore } from "../store/productStore";

import DataTable from "react-data-table-component";
import BotonRedireccion from "../components/BotonRedireccion";
import Modal from "../components/Modal";


const MostrarInventario = () => {
  
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      width: "10rem"
    },
    {
      name: "Precio",
      selector: (row) => row.precio_de_venta,
    },
    {
      name: "unidades",
      selector: (row) => row.unidades
    }
  ]
  const conditionalRowStyles = {
    rows: {
      style: {
        '&:nth-of-type(even)': {
          backgroundColor: '#CECECE',
        },
      },
    },
  }

  let data = useProductStore((state) => state.products)
  
  const [registros, setRegistros] = useState()

  if(registros == undefined){
    setRegistros(data)
  }

  const handleChange = (e) => {
    let datos_filtrados = data.filter(dato => dato.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
    setRegistros(datos_filtrados)
  }

  const [dataModal, setDataModal] = useState({})
  const [modal, setModal] = useState(false)

  const onRowClicked = (row) => {
    // console.log('row: ',row);
    setDataModal(row)
    setModal(true)
  }

  const showModal = (valor) => {
    setModal(valor)
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <BotonRedireccion link="/" texto="Atras"/>
        <input type="text" className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}/>
        <div >
          <DataTable 
          columns={columns} 
          data={registros} 
          customStyles={conditionalRowStyles}
          onRowClicked={onRowClicked}            
          fixedHeader={!modal}
          className="mb-5"/>
        </div>
      </div>
        {modal && <Modal dataModal={dataModal} showModal={showModal}/>}
    </>
  )
};


export default MostrarInventario;
