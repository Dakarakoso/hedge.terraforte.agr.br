import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    user: "postgres",
    password: "test",
    host: "localhost",
    port: 5432,
    database: "postgres",
    ssl: process.env.NODE_ENV === "development" ? false : true,
  });
  console.log("DB credentials: ", {
    user: "postgres",
    password: "test",
    host: "localhost",
    port: 5432,
    database: "postgres",
  });
  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
