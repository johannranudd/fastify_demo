import { v4 as uuidv4 } from "uuid";
import { items } from "../items.js";
// let items = require("../items.js");

export const getAllItemsCtr = (req, reply) => {
  reply.send(items);
};
export const getSingleItemCtr = (req, reply) => {
  const { id } = req.params;
  const foundItem = items.find((item) => item.id == id);
  reply.send(foundItem);
};

export const postItemCtr = (req, reply) => {
  const { name } = req.body;
  const newItem = {
    id: uuidv4(),
    name,
  };
  let newItems = [...items, newItem];
  items.length = 0;
  items.push(...newItems);
  reply.code(201).send(newItems);
};
