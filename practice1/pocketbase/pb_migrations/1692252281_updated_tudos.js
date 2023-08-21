/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p1y3w8y38pko2kb")

  collection.name = "todos"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p1y3w8y38pko2kb")

  collection.name = "tudos"

  return dao.saveCollection(collection)
})
