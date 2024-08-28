import database from "../../../../infra/database.js";

const status = async (request, response) => {
  const result = await database.query("SELECT NOW()");
  console.log(result.rows[0]);
  response.status(200).json({ key: "item", titulo: "contrato de numseioque" });
};

export default status;
