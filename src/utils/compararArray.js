function compararArraysDeObjetos(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  array1.sort();
  array2.sort();

  for (let i = 0; i < array1.length; i++) {
    if (!objetosSonIguales(array1[i], array2[i])) {
        return false;
    }
  }

  return true;
}

function objetosSonIguales(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
      return false;
  }

  for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
          return false;
      }
  }

  return true;
}


export default compararArraysDeObjetos;