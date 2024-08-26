const createPhrase = require("../../models/string");

const string1 = "banana";
const string2 = "apple";

test("test if string = banana", () => {
  const result = createPhrase.createPhrase(string1, string2);
  expect(result).toBe("banana apple");
});
