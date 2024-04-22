import pg, { PoolConfig } from "pg";

const poolConfig: PoolConfig = {
  host: "database",
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};

export default new pg.Pool(poolConfig);
