// Victor Torres - T62241191

import express from 'express';
import { conectarDB } from './src/config/database/conection.js';
import casasRoutes from './src/routes/casasRoutes.js';

const app = express();

// middlewares
app.use(express.json());

// config
conectarDB();

//routes
app.use('/api/casas', casasRoutes);

// PORT config
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}`);
});
