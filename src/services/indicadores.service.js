import indicadores from '../data/indicadores.json';
import detalleIndicadores from '../data/detalleIndicadores.json'
export function fetchAll() {
  return indicadores;
}

export function fetchDetallesIndicadores() {
  return detalleIndicadores;
  /*const niveles = [
    {
      nombre: "Licenciatura",
      cantidad: 4
    },
    {
      nombre: "Especialidad",
      cantidad: 1
    },
    {
      nombre: "Maestría",
      cantidad: 3
    },
    {
      nombre: "Doctorado",
      cantidad: 1
    },
  ]
  return niveles*/
}
