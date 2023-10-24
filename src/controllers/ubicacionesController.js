import db from '../config/database/conection.js';

const getUbicaciones = async (req, res) => {

  const consulta = `SELECT * FROM ubicaciones`;

  try {
    const ubicaciones = await db.query(consulta);
    res.json({
      msg: 'Consulta existosa',
      total_registros: ubicaciones.length,
      hechoPor: 'Victor Torres',
      casas: ubicaciones,
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

const getUbicacionId = async (req, res) => {

  const consulta = `SELECT * FROM ubicaciones WHERE id = ${req.params.id};`;

  try {
    const ubicacion = await db.query(consulta);

    res.status(200).json({
      msg: 'Consulta existosa',
      id: req.params.id,
      hechoPor: 'Victor Torres',
      total_registros: ubicacion.length,
      casas: ubicacion,
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

const agregarUbicacion = async (req, res) => {
  const body = [
    req.body.ubicacion,
  ]

  const consulta = `
    INSERT INTO
      ubicaciones (ubicacion)
    VALUES ($1)
  returning *`;

  try {
    const result = await db.query(consulta, body);

    res.status(200).json({
      msg: 'Ubicacion agregada existosamente',
      hechoPor: 'Victor Torres',
      total_registros: result.length,
      casas: result,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Se produjo un error al guardar la ubicacion',
      error: {
        error: true,
        msg: error.message,
      },
    });
  }
}

const editarUbicacion = async (req, res) => {
  const body = [
    req.body.ubicacion,
    req.params.id,
  ]

  const consulta = `
  UPDATE ubicaciones
    SET ubicacion = $1
  WHERE id = $2
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
  getUbicaciones,
  getUbicacionId,
  agregarUbicacion,
  editarUbicacion
}
