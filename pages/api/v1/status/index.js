import database from "infra/database.js";

const status = async (request, response) => {
  const updatedAt = new Date().toISOString();
  const dbVersionQuery = await database.query("SHOW server_version");
  const dbVersion = dbVersionQuery.rows[0].server_version;
  const dbMaxConnectionsQuery = await database.query("SHOW max_connections;");
  const dbMaxConnections = parseInt(
    dbMaxConnectionsQuery.rows[0].max_connections,
  );
  const openedConnectionsQuery = await database.query(
    "SELECT COUNT(*) AS open_connections FROM pg_stat_activity;",
  );
  const openedConnections = openedConnectionsQuery.rows[0].open_connections;
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: dbVersion,
        max_connections: dbMaxConnections,
        opened_connections: openedConnections,
      },
    },
  });
};

export default status;
