import { createServer } from "./server";

async function main() {
  const PORT = process.env.PORT || 3000;
  const server = await createServer();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ✨🧨`);
  });
}

main();
