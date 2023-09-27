import itemRoutes from "./routes/items.js";
import fastify from "fastify";

const server = fastify({ logger: true });
const PORT = 5000;

server.register(itemRoutes);

const start = async () => {
  try {
    await server.listen({ port: PORT });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
