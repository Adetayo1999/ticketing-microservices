import { CONFIG_KEYS } from "./common/config";
import connectDB from "./database";
import { createServer } from "./server";

async function main() {
  if (Object.values(CONFIG_KEYS).some((env) => env === undefined)) {
    throw new Error("Invalid Configuration");
  }
  const PORT = process.env.PORT || 3000;

  await connectDB();

  const server = await createServer();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ✨🧨`);
  });
}

main();
