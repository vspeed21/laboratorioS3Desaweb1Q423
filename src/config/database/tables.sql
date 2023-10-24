-- Active: 1697072596370@@localhost@5432@postgres

-- DROP Table casas CASCADE;

CREATE TABLE
    casas (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR,
        descripcion VARCHAR,
        precio NUMERIC,
        ubicacion_id INT REFERENCES ubicaciones(id)
    );

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

CREATE TABLE
    rooms (
        id SERIAL PRIMARY KEY,
        casa_id INT REFERENCES casas(id),
        cantidad_habitaciones NUMERIC,
        cantidad_wc NUMERIC
    );

CREATE TABLE
    ubicaciones (
        id SERIAL PRIMARY KEY,
        ubicacion VARCHAR
    );

-- Insertar tres ubicaciones diferentes

INSERT INTO
    ubicaciones (ubicacion)
VALUES ('San Pedro Sula'), ('Tegucigalpa'), ('Lomas del carmen'), ('Santa barbara'), ('Utila'), ('Gracias, Lempira');

-- Insertar tres casas en ubicaciones distintas

INSERT INTO
    casas (
        nombre,
        descripcion,
        precio,
        ubicacion_id
    )
VALUES (
        'Casa Ejemplo 1',
        'Una casa espaciosa',
        250000,
        1
    ), (
        'Casa Ejemplo 2',
        'Una casa moderna',
        350000,
        2
    ), (
        'Casa Ejemplo 3',
        'Una casa acogedora',
        180000,
        4
    ), (
        'Casa Ejemplo 3',
        'Una casa acogedora',
        180000,
        6
    ), (
        'Casa Ejemplo 3',
        'Una casa acogedora',
        180000,
        5
    );

INSERT INTO
    rooms (
        casa_id,
        cantidad_habitaciones,
        cantidad_wc
    )
VALUES (1, 4, 2), (2, 3, 2), (3, 2, 3), (5, 3, 1);