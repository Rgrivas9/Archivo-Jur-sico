const unicos = (lista) => {
  const listaSinRepetir = [];
  const index = 0;
  lista.sort();
  lista.forEach((element) => {
    index++
    if (element!==lista[index]){listaSinRepetir.push(element)}
  });
  return listaSinRepetir
};
export default unicos;
