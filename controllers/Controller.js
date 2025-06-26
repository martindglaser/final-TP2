class Controller {
  constructor(service) {
    this.service =service;
  }

  getAll = async (req, res) => {
    const data = await this.service.getAll();
    res.status(200).send(data);
  };
  create = async (req, res) => {
    try {
      const { nombre,apellido,nota } = req.body;
      const data = await this.service.create({ nombre,apellido,nota });
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
  getNotasAgrupadas = async (req, res) => {
    try {
      const data = await this.service.getNotasAgrupadas();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
}

export default Controller;
