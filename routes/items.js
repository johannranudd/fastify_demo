import {
  getAllItemsCtr,
  getSingleItemCtr,
  postItemCtr,
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
        type: "array",
        items: Item,
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
    response: {
      201: Item,
    },
  },
  handler: postItemCtr,
};

export default async function (fastify, opts, done) {
  // Get all items structure url, optionsObject, function()
  fastify.get("/items", getAllItemsOpts);

  // Get single item
  fastify.get("/items/:id", getSingleItemOpts);
  fastify.post("/items", postItemOpts);

  done();
}
