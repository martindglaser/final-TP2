const inputValidates = async (req, res, next) => {
  const { nombre, apellido, nota } = req.body;

  if (!nombre || !nota || !apellido) {
    res.status(404).send({ message: "Faltan datos" });
    return;
  }
  

  if (typeof nota !== "number") {
    return res.status(400).json({ error: "El campo 'nota' debe ser un número." });
  }

  if (nota < 0 || nota > 10) {
    return res.status(400).json({ error: "La nota debe estar entre 1 y 10." });
  }

  if (typeof nombre !== "string") {
    return res.status(400).json({ error: "El parámetro debe ser una cadena de texto." });
  }

  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;

  if (!regex.test(nombre) || !regex.test(apellido)) {
    return res.status(400).json({
      error: "El nombre y el apellido solo puede contener letras (incluyendo acentos y ñ). No se permiten números ni caracteres especiales.",
    });
  }

  next();
};

export default inputValidates;
