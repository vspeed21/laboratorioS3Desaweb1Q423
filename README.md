# API CASAS

## Configuración de base de datos
Cambia el nombre al archivo ```.env.template``` a ```.env``` y pon los valores correspondientes a tu conexión de postgres

```
  USER
  PASSWORD
  HOST
  DATABASE
```

para conectarte a la base de datos local en tu computadora. Luego ejecuta las consultas SQL que estan en el archivo `src/config/database/tables.sql`

## Servidor de desarrollo
- Abre la terminal en el proyecto y ejecuta los siguientes comandos

  ```npm install```
  &
  ```npm run dev```

Desde de tu navegador accede a

``` http://localhost:4000/api/casas```

## Author
[@vspeed21](https://github.com/vspeed21)