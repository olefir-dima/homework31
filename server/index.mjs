import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 5500;
const host = process.env.HOST || "0.0.0.0";

const server = fastify();

server.register(fastifyStatic, {
  root: path.join(__dirname, "../build"),
});

server.get("/hello", async (request, response) => {
  const data = request.body;
  response.send({ message: "Hello world" });
});

server.listen({ port, host }).then(() => {
  console.log("Server started on " + host + ":" + port);
});
