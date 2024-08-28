import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    user: "postgres",
    password: "test",
    host: "localhost",
    port: 5432,
    database: "postgres",
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
