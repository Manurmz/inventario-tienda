const url = import.meta.env.VITE_URL_BACKEND

export const obtenerProductos = async () => {
  try {
    const response = await fetch(`${url}/productos`);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error', error.message);
  }
}

export const crearProducto = async (producto) => {
  // console.log(url);
  // console.log('producto\n:',producto);
  try {
    const response = await fetch(`${url}/productos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    });
    if (!response.ok) {
      throw new Error('Error al crear el producto');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error', error.message);
  }
}

export const actualizarProducto = async (producto) => {
  try {
    const response = await fetch(`${url}/productos/${producto.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    });
    if (!response.ok) {
      throw new Error('Error al actualizar el producto');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error', error.message);
  }
}

// export const eliminarProducto = async (id) => {}

