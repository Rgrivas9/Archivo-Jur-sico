const unicos = (dinos,filtro) => {
  const listaSinRepetir = [];
  let index = 0;
  const lista=dinos.map((dino)=>dino[filtro])
  lista.sort();
  lista.forEach((element) => {
    index++
    if (element!==lista[index]){listaSinRepetir.push(element)}
  });
  return listaSinRepetir
};
export default unicos;
