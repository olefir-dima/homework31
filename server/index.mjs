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

const menu = [
  {
    name: "Пепероні",
    sizes: ["мала", "велика"],
    prices: ["300", "350"],
    available: true,
  },
  {
    name: "Гавайська",
    sizes: ["мала", "велика"],
    prices: ["330", "360"],
    available: true,
  },
  {
    name: "Еспресо",
    sizes: ["мала", "середня", "велика"],
    prices: ["20", "25", "30"],
    available: true,
  },
  {
    name: "Латте",
    sizes: ["мала", "середня", "велика"],
    prices: ["25", "30", "35"],
    available: true,
  },
];

server.get("/menu", async (request, response) => {
  response.send(menu);
});

server.listen({ port, host }).then(() => {
  console.log("Server started on " + host + ":" + port);
});
