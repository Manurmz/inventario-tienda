function arrayToObject(array) {
  const objeto = {};

  array.forEach((elemento, index) => {
      for (const clave in elemento) {
          objeto[clave + '_' + index] = elemento[clave];
      }
  });

  return objeto;
}

function objectToArray(objeto) {
  const array = [];

  // Obtenemos el máximo índice encontrado en las claves
  let maxIndex = 0;
  for (const clave in objeto) {
      const match = clave.match(/_(\d+)$/);
      if (match) {
          const index = parseInt(match[1]);
          if (index > maxIndex) {
              maxIndex = index;
          }
      }
  }

  // Construimos el array a partir del objeto
  for (let i = 0; i <= maxIndex; i++) {
      const elemento = {};
      for (const clave in objeto) {
          const match = clave.match(/_(\d+)$/);
          if (match && parseInt(match[1]) === i) {
              const claveSinIndice = clave.replace(/_\d+$/, '');
              elemento[claveSinIndice] = objeto[clave];
          }
      }
      array.push(elemento);
  }

  return array;
}
export {arrayToObject, objectToArray}