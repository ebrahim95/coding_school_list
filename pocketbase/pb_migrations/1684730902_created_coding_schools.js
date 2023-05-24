migrate((db) => {
  const collection = new Collection({
    "id": "3uutiskx7o8g7rq",
    "created": "2023-05-22 04:48:22.971Z",
    "updated": "2023-05-22 04:48:22.971Z",
    "name": "coding_schools",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rickkrgd",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jck3fqtw",
        "name": "field",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "tingbg6o",
        "name": "courses_offered",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zm15wo7v",
        "name": "location",
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
  const collection = dao.findCollectionByNameOrId("3uutiskx7o8g7rq");

  return dao.deleteCollection(collection);
})
