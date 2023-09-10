export const CONFIG_KEYS = Object.freeze({
  JWT_SECRET: process.env.JWT_SECRET!,
  POSTGRES_HOST: process.env.POSTGRES_HOST!,
  POSTGRES_DB: process.env.POSTGRES_DB!,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD!,
  POSTGRES_USER: process.env.POSTGRES_USER!,
});
