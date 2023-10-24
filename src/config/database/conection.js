import pgPromise from 'pg-promise';

const pgp = pgPromise();

const username = 'postgres';
const password = '<password>';
const host = 'localhost'
const database = 'postgres';

const conectionString = `postgresql://${username}:${password}@${host}:5432/${database}`;
const db = pgp(conectionString);

async function conectarDB() {
  try {
    await db.connect();
    console.log('Conexión exitosa');
  } catch (error) {
    console.log(`Error al conectarse a postgres: ${error.message}`);
  }
}

export { conectarDB };
export default db;
