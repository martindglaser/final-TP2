class Service {
  constructor(Dao) {
    this.alumnos = Dao;
  }

  getAll = async () => {
    const data = this.alumnos.getAll();
    return data;
  };
  create = async (params) => {
    const data = this.alumnos.create(params);
    return data;
  };


  getNotasAgrupadas = async () => {
    const data = await this.alumnos.getAll();

    const agrupado = {};

    data.forEach(({ nombre, apellido, nota }) => {
      const clave = `${nombre} ${apellido}`;
      if (!agrupado[clave]) {
        agrupado[clave] = {
          nombre,
          apellido,
          notas: [],
        };
      }
      agrupado[clave].notas.push(nota);
    });

    return Object.values(agrupado);
  };
}

export default Service;
