const fastify = require("fastify")({ logger: true });

const PORT = 5000;

fastify.get("/items", (req, reply) => {
  reply.send({ test: "ELLO MATE" });
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (error) {
    fastify.log(error);
    process.exit(1);
  }
};

start();
