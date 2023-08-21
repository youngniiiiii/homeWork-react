/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p1y3w8y38pko2kb")

  // remove
  collection.schema.removeField("y1bbcmnp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gegntnm5",
    "name": "done",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p1y3w8y38pko2kb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y1bbcmnp",
    "name": "done",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("gegntnm5")

  return dao.saveCollection(collection)
})
