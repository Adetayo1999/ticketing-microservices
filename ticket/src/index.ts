import http from "http";
import App from "./app";
import { CONFIG_KEYS } from "./common/config";
import connectDB from "./database";

async function main() {
  if (Object.values(CONFIG_KEYS).some((env) => env === undefined)) {
    throw new Error("Invalid Environment Variables");
  }

  const PORT = process.env.PORT || 4000;
  const app = App();

  await connectDB();

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log("Ticket server listening on port %s 🚀", PORT);
  });

  process.on("SIGTERM", () => {
    server.close(() => {
      console.log(`Process terminated`);
    });
  });

  process.on("unhandledRejection", (error) => {
    console.log(error);
    server.close(() => {
      process.exit(1);
    });
  });

  process.on("uncaughtException", (error) => {
    console.log(error);
    server.close(() => {
      process.exit(1);
    });
  });
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
