const ordenar = (lista, orden, modo) => {
  const listaOrdenada = [];
  const listaAOrdenar = lista.map((dinosaurio) => dinosaurio[orden]);
  orden == "nombre"
    ? listaAOrdenar.sort()
    : listaAOrdenar.sort((a, b) => a - b);
  modo == 0 ? listaAOrdenar : listaAOrdenar.reverse();
  let index = -2;
  listaAOrdenar.forEach((filtro) => {
    index++;
    if (filtro !== listaAOrdenar[index]) {
      listaOrdenada.push(
        ...lista.filter((dinosaurio) => dinosaurio[orden] === filtro)
      );
    }
  });
  return listaOrdenada;
};
export default ordenar;
