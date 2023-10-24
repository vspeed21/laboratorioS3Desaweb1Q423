import pgPromise from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();

const pgp = pgPromise();

const username = process.env.USER;
const password = process.env.PASSWORD;
console.log(password);
const host = process.env.HOST;
const database = process.env.DATABASE;

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
