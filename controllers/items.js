import { v4 as uuidv4 } from "uuid";
import { items } from "../items.js";

export const getAllItemsCtr = (req, reply) => {
  const message = items.length === 0 ? "There are no more items" : "";
  reply.send({ items, message });
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
  reply.code(201).send(items);
};
export const deleteItemCtr = (req, reply) => {
  const { id } = req.params;
  const filteredItems = items.filter((item) => item.id !== id);
  items.length = 0;
  items.push(...filteredItems);
  reply.send({
    items,
    message: `item with id ${id} has been deleted`,
  });
};
export const putItemCtr = (req, reply) => {
  const { id } = req.params;
  console.log("IDDDDDD", id);
  const updatedItems = items.map((item) => {
    if (item && item.id === id) {
      return { ...item, name: req.body.name };
    }
    return item;
  });
  items.length = 0;
  items.push(...updatedItems);
  reply.send({
    items,
    message: `item with id ${id} has been updated`,
  });
};
