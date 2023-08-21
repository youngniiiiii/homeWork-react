/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p1y3w8y38pko2kb",
    "created": "2023-08-17 06:03:14.873Z",
    "updated": "2023-08-17 06:03:14.873Z",
    "name": "tudos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gp7h4kpy",
        "name": "doit",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 6,
          "max": 100,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p1y3w8y38pko2kb");

  return dao.deleteCollection(collection);
})
