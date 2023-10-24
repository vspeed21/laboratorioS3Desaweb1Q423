-- Active: 1697072596370@@localhost@5432@postgres

CREATE TABLE casas (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR,
  descripcion VARCHAR,
  cantidad_habitaciones NUMERIC,
  cantidad_wc NUMERIC,
  precio NUMERIC,
  ubicacion VARCHAR
);

insert into casas
(nombre, descripcion, cantidad_habitaciones, cantidad_wc, precio, ubicacion)
values
('casa en el lago', 'Hermosa casa en el lago cerca del parque cental', 2, 3, 3000, 'San pedro Sula, Honduras'),
('casa de madera', 'Hermosa casa de madera junto al rio', 2, 1, 5000, 'Bosque Honduras'),
('casa de madera', 'Casa moderna futuris', 3,4, 500000, 'Tegucigalpa, Honduras');
