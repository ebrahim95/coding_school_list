migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3uutiskx7o8g7rq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jck3fqtw",
    "name": "url",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3uutiskx7o8g7rq")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
