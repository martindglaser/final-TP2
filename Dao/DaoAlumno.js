import { v4 as uuidv4 } from "uuid";
class Dao {
  data = [];

  getAll = async () => {
    return this.data;
  };

  create = async (params) => {
    const info = {
      id: uuidv4(),
      nombre: params.nombre,
      apellido: params.apellido,
      nota: params.nota,
    };
    this.data.push(info);
    return info;
  };

  
}

export default Dao;
