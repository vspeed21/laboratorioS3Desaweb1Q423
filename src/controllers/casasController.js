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

export {
  getCasas,
  getCasaId,
}
