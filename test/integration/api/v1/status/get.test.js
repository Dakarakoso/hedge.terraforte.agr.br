import orchestrator from "test/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET /api/v1/status", () => {
  describe("Anonymous user", () => {
    describe("Running pending migrations", () => {
      test("Retrieving current system status", async () => {
        const response = await fetch("http://localhost:3000/api/v1/status");
        expect(response.status).toBe(200);
        const responseBody = await response.json();
        const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
        expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
        const dbVersion = responseBody.dependencies.database.version;
        expect(typeof dbVersion).toBe("string");
        expect(dbVersion).toBe("16.0");
        expect(typeof responseBody.dependencies.database.max_connections).toBe(
          "number",
        );
        expect(responseBody.dependencies.database.max_connections).toBe(100);
      });
    });
  });
});
