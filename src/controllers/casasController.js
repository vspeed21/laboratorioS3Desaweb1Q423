import db from '../config/database/conection.js';

const getCasas = async (req, res) => {

  const consulta = `
    SELECT
      casas.id,
      casas.nombre,
      casas.descripcion,
      casas.precio,
      ubicaciones.ubicacion,
      rooms.cantidad_habitaciones,
      rooms.cantidad_wc
    FROM casas
      INNER JOIN ubicaciones ON casas.ubicacion_id = ubicaciones.id
      INNER JOIN rooms ON casas.id = rooms.casa_id;
    `;

  try {
    const casas = await db.query(consulta);
    res.json({
      msg: 'Consulta existosa',
      total_registros: casas.length,
      hechoPor: 'Victor Torres',
      casas,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Consulta fallida',
      error: {
        error: true,
        msg: error.message,
      },
    });
  }

}

const getCasaId = async (req, res) => {

  const consulta = `
    SELECT
      casas.id,
      casas.nombre,
      casas.descripcion,
      casas.precio,
      ubicaciones.ubicacion,
      rooms.cantidad_habitaciones,
      rooms.cantidad_wc
    FROM casas
      INNER JOIN ubicaciones ON casas.ubicacion_id = ubicaciones.id
      INNER JOIN rooms ON casas.id = rooms.casa_id
    WHERE casas.id = ${req.params.id};
  `;

  try {
    const casas = await db.query(consulta);

    res.status(200).json({
      msg: 'Consulta existosa',
      id: req.params.id,
      hechoPor: 'Victor Torres',
      total_registros: casas.length,
      casas,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Consulta fallida',
      error: {
        error: true,
        msg: error.message,
      },
    });
  }

}

const agregarCasa = async (req, res) => {
  const body = [
    req.body.nombre,
    req.body.descripcion,
    req.body.precio,
    req.body.ubicacion_id,
  ]

  const consulta = `
  INSERT INTO casas (nombre, descripcion, precio, ubicacion_id)
  VALUES ($1, $2, $3, $4);
  returning * `;

  try {
    const result = await db.query(consulta, body);

    res.status(200).json({
      msg: 'Casa agregada existosamente',
      hechoPor: 'Victor Torres',
      total_registros: result.length,
      casas: result,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Se produjo un error al guardar la casa',
      error: {
        error: true,
        msg: error.message,
      },
    });
  }
}

const editarCasa = async (req, res) => {
  const body = [
    req.body.nombre,
    req.body.descripcion,
    req.body.precio,
    req.body.ubicacion_id,
    req.params.id,
  ]

  const consulta = `
  UPDATE casas
  SET nombre = $1,
      descripcion = $2,
      precio = $3,
      ubicacion_id = $4
  WHERE id = $5
  RETURNING *`;

  try {
    const result = await db.query(consulta, body);

    res.status(200).json({
      msg: 'Casa actualizada existosamente',
      hechoPor: 'Victor Torres',
      total_registros: result.length,
      casas: result,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Se produjo un error al actualizar la casa',
      error: {
        error: true,
        msg: error.message,
      },
    });
  }
}

export {
  getCasas,
  getCasaId,
  agregarCasa,
  editarCasa
}
