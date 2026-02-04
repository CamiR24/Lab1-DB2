# Laboratorio 01 – MongoDB Atlas

**Curso:** CC3089 – Base de Datos 2  
**Semestre:** I – 2026  
**Universidad:** Universidad del Valle de Guatemala  
**Facultad:** Ingeniería  
**Departamento:** Ciencias de la Computación  

## 📌 Descripción general

Este laboratorio tiene como objetivo familiarizarse con el uso de **MongoDB Atlas** y la manipulación básica de datos utilizando **MongoDB** desde un cliente NoSQL. Se trabajó con la creación de una base de datos, colecciones, inserción de documentos y consultas básicas de exploración y actualización de datos, utilizando únicamente las instrucciones vistas en clase.

## 🛠️ Requisitos previos

Antes de iniciar con los ejercicios, es necesario cumplir con los siguientes requisitos:

- Tener una cuenta activa en **MongoDB Atlas**.
- Haber creado un **cluster** en MongoDB Atlas.
- Contar con un **cliente NoSQL** para ejecutar las consultas (MongoDB Compass, mongosh, u otro visto en clase).
- Acceso a un entorno local donde se puedan ejecutar las instrucciones y registrar fecha y hora de ejecución.

## 📂 Entregables

Se entrega un **documento PDF** que contiene:

- Evidencia de cada instrucción ejecutada.
- Resultados parciales que demuestran la correcta ejecución.
- Fecha y hora visibles de la ejecución en ambiente local.
- El script completo con todas las instrucciones utilizadas.

> **Nota:** No es necesario mostrar el resultado completo de cada consulta, solo lo suficiente para evidenciar su correcta ejecución.

---

## 🧪 Ejercicio 1 – Preparación del ambiente

1. Creación de la base de datos `lab01` desde la interfaz gráfica de MongoDB Atlas.
2. Obtención de la **URI de conexión** para configurar el acceso desde el cliente NoSQL.
3. Investigación y uso de la instrucción `createCollection()` para crear las colecciones:
   - `recetas`
   - `usuarios`
4. Importación de los datos correspondientes a ambas colecciones desde el IDE NoSQL.

---

## 🔍 Ejercicio 2 – Exploración y manipulación de datos

> **Observación importante:**  
> Para este ejercicio se utilizaron únicamente las instrucciones vistas en clase. El uso de instrucciones adicionales puede afectar la calificación.

### Consultas y operaciones realizadas

1. Consulta para obtener todas las recetas.
2. Consulta para obtener todos los usuarios.
3. Creación de un nuevo documento en la colección `recetas` con los campos:
   - Título
   - Descripción
   - Tiempo de cocción
4. Consulta para buscar la receta recién creada.
5. Consulta que lista las recetas mostrando únicamente el título y el tiempo de cocción.
6. Consulta que lista las recetas ordenadas por mayor tiempo de cocción.
7. Actualización de una receta para agregar un nuevo rating y recalcular el rating promedio.
8. Eliminación de un ingrediente de una receta específica.
9. Uso de la opción `skip` para obtener la **tercera receta con mejor rating promedio**.
10. Consulta para obtener las recetas que tienen comentarios.
11. Consulta para listar las recetas que son de tipo postre.
12. Eliminación de las recetas clasificadas como difíciles de cocinar.
13. Inserción de **3 nuevos usuarios en una sola instrucción**, con los campos:
    - Nombre
    - Apellido
    - Correo electrónico
    - Contraseña
14. Actualización de los usuarios creados para agregar su receta favorita.
15. Consulta para obtener los distintos nombres de usuarios.
16. Consulta utilizando **expresiones regulares** para buscar usuarios con correo de dominio Gmail.
17. Agregado de un campo booleano de actividad (`activo`) a los usuarios.
18. Inactivación de 2 usuarios mediante una consulta de actualización.
19. Actualización global para cambiar la unidad de medida de recetas de **lb a kg**.

---

## 📎 Notas finales

- Todas las consultas fueron ejecutadas en un entorno local conectado a MongoDB Atlas.
- Se respetaron las restricciones de uso de instrucciones indicadas en clase.
- El laboratorio permitió reforzar conceptos fundamentales de MongoDB como `find`, `insert`, `update`, `delete`, proyecciones, ordenamientos y expresiones regulares.

---

📘 *Laboratorio realizado como parte del curso CC3089 – Base de Datos 2.*
