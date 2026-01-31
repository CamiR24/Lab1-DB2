// Script para MongoDB (mongosh)
// ===============================
// Script de MongoDB - Recetas
// Autor: Camila Richter 23183, Marinés García 23391, Carlos Alburez 231311
// Fecha: 31/01/2026
// ===============================

// Seleccionar la base de datos
use lab01

//crear colección para users, los datos se cargaron con la interfaz
db.createCollection("users")
{ ok: 1 }

//crear colecicón para recetas, los datos se cargaron con la interfaz
db.createCollection("recipes")
{ ok: 1 }

//busca y muestra todas las recetas
db.recipes.find().pretty()

//busca y muestra todos los usuarios
db.users.find().pretty()

//crea un nuevo documento en recetas solamente con estos campos
db.recipes.insertOne({
  title: "Enchiladas verdes",
  desc: "Enchiladas tradicionales con salsa verde",
  cook_time: 30
})

//busca la receta que cree
db.recipes.find({ title: "Enchiladas verdes" }).pretty()

//muestra solamente el titulo y tiempo de coccion de cada receta
db.recipes.find(
  {},
  {
    _id: 0,
    title: 1,
    cook_time: 1
  }
)

//muestra solamente el titulo y tiempo de coccion de cada receta y ordena por tiempo de cocción
db.recipes.find(
  {},
  {
    _id: 0,
    title: 1,
    cook_time: 1
  }
). sort({ cook_time: -1 }) //el -1 es de mayor a menor, descendente

//Agrega 1 más a ratings y actualiza el promedio de ratings
db.recipes.updateOne(
  { title: "Tacos" },
  [
    {
      $set: {
        rating: { $concatArrays: ["$rating", [5]] } //agrega rating
      }
    },
    {
      $set: {
        rating_avg: { $avg: "$rating" } //recalcula promedio
      }
    }
  ]
)

db.recipes.find(
  { title: "Tacos" },
  { _id: 0, title: 1, rating: 1, rating_avg: 1 }
).pretty()

//elimina 1 ingrediente de la receta específica
db.recipes.updateOne(
  { title: "Tacos" },
  {
    $pull: {
      ingredients: { name: "taco seasoning" } //elimina ingrediente dentro de la lista
    }
  }
)

db.recipes.find(
  { title: "Tacos" },
  { _id: 0, title: 1, ingredients: 1 }
).pretty()

//muestra la tercera receta con mejor promedio
db.recipes.find(
  {},
  {
    _id: 0,
    title: 1,
    rating_avg: 1
  }
).sort({ rating_avg: -1 }).skip(2).limit(1) //salta las primeras 2 y muestra solo 1, la tercera

//muestra solamente las recetas que tienen comentarios
db.recipes.find(
  {
    comments: { $exists: true, $ne: [] }
  },
  {
    _id: 0,
    title: 1,
    comments: 1
  }
)

//muestra las recetas que son postres
db.recipes.find(
  {type: "Dessert"},
  {
    _id: 0,
    title: 1,
    type: 1
  }
)