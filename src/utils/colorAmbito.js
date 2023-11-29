export function getClassByType(type) {
  const classType = ["formacion-profesional-color", "profesionalizacion-docente-color", "programas-licencituras-tsu-color", "programas-investigacion-posgrado-color", "institucion-plantel-color"];
  return classType[type - 1];
}


