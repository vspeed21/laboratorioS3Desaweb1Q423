import db from '../config/database/conection.js';

const getRooms = async (req, res) => {

  const consulta = `
    SELECT rooms.id, casas.nombre AS nombre_casa, rooms.cantidad_habitaciones, rooms.cantidad_wc
      FROM rooms
    INNER JOIN casas ON rooms.casa_id = casas.id;
  `;

  try {
    const rooms = await db.query(consulta);
    res.json({
      msg: 'Consulta existosa',
      total_registros: rooms.length,
      hechoPor: 'Victor Torres',
      casas: rooms,
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

const getRoomId = async (req, res) => {

  const consulta = `
    SELECT rooms.id, casas.nombre AS nombre_casa, rooms.cantidad_habitaciones, rooms.cantidad_wc
      FROM rooms
    INNER JOIN casas ON rooms.casa_id = casas.id
    WHERE rooms.id = ${req.params.id}
  `;

  try {
    const room = await db.query(consulta);

    res.status(200).json({
      msg: 'Consulta existosa',
      id: req.params.id,
      hechoPor: 'Victor Torres',
      total_registros: room.length,
      casas: room,
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

const agregarRoom = async (req, res) => {
  const body = [
    req.body.casa_id,
    req.body.cantidad_habitaciones,
    req.body.cantidad_wc,
  ]

  const consulta = `
    INSERT INTO
      rooms (
          casa_id,
          cantidad_habitaciones,
          cantidad_wc
      )
    VALUES ($1, $2, $3)
  returning *`;

  try {
    const result = await db.query(consulta, body);

    res.status(200).json({
      msg: 'Room agregado existosamente',
      hechoPor: 'Victor Torres',
      total_registros: result.length,
      casas: result,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Se produjo un error al guardar la Room',
      error: {
        error: true,
        msg: error.message,
      },
    });
  }
}

const editarRoom = async (req, res) => {
  const body = [
    req.body.casa_id,
    req.body.cantidad_habitaciones,
    req.body.cantidad_wc,
    req.params.id,
  ]

  const consulta = `
  UPDATE rooms
    SET casa_id = $1,
    SET cantidad_habitaciones = $2,
    SET cantidad_wc = $3
  WHERE id = $4
  RETURNING *`;

  try {
    const result = await db.query(consulta, body);

    res.status(200).json({
      msg: 'Room actualizado existosamente',
      hechoPor: 'Victor Torres',
      total_registros: result.length,
      casas: result,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Se produjo un error al actualizar la Room',
      error: {
        error: true,
        msg: error.message,
      },
    });
  }
}

export {
  getRooms,
  getRoomId,
  agregarRoom,
  editarRoom
}
