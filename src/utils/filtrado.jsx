import ordenar from "./ordenar";

const filtrado = (lista, objeto) => {
  let listafiltrada = lista;

  if (objeto.periodo !== "todos") {
    listafiltrada = lista.filter((dino) => dino.periodo === objeto.periodo);
  }
  if (objeto.ubicacion !== "todas") {
    listafiltrada = listafiltrada.filter(
      (dino) => dino.ubicacion === objeto.ubicacion
    );
  }
  if (objeto.dieta !== "todas") {
    listafiltrada = listafiltrada.filter((dino) => dino.dieta === objeto.dieta);
  }
  if (objeto.orden !== "todos") {
    listafiltrada = listafiltrada.filter((dino) => dino.orden === objeto.orden);
  }

  listafiltrada = ordenar(listafiltrada, objeto.ordenado, objeto.modo);

  return listafiltrada;
};
export default filtrado;
