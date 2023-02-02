import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// middleswares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ✨🚀🎉`);
});
