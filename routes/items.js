import {
  getAllItemsCtr,
  getSingleItemCtr,
  postItemCtr,
  deleteItemCtr,
  putItemCtr,
} from "../controllers/items.js";

const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// Options for get all items
const getAllItemsOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          items: {
            type: "array",
            items: Item,
          },
          message: { type: "string" },
        },
      },
    },
  },
  handler: getAllItemsCtr,
};

const getSingleItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getSingleItemCtr,
};
const postItemOpts = {
  schema: {
    body: {
      type: "object",
      properties: {
        id: { type: "string" },
        name: { type: "string" },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: postItemCtr,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteItemCtr,
};
const putItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          items: {
            type: "array",
            items: Item,
          },
          message: { type: "string" },
        },
      },
    },
  },
  handler: putItemCtr,
};

export default async function (fastify, opts, done) {
  // Get all items structure url, optionsObject, function()
  fastify.get("/items", getAllItemsOpts);

  // Get single item
  fastify.get("/items/:id", getSingleItemOpts);

  // Post item
  fastify.post("/items", postItemOpts);

  // Delete item
  fastify.delete("/items/:id", deleteItemOpts);

  // Update item
  fastify.put("/items/:id", putItemOpts);

  done();
}
