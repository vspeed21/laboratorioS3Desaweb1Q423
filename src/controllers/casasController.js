import db from '../config/database/conection.js';

const getCasas = async (req, res) => {

  const consulta = 'SELECT * FROM casas';
  const casas = await db.query(consulta);

  res.json({
    msg: 'Consulta existosa',
    total_registros: casas.length,
    hechoPor: 'Victor Torres',
    casas,
  });
}

const getCasaId = async (req, res) => {

  const consulta = `SELECT * FROM casas WHERE id = ${req.params.id}`;
  const casas = await db.query(consulta);

  res.json({
    msg: 'Consulta existosa',
    id: req.params.id,
    hechoPor: 'Victor Torres',
    total_registros: casas.length,
    casas,
  });
}

export {
  getCasas,
  getCasaId,
}
