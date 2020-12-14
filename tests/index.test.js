const targetValue = require("../lib");

const inputEvent = { target: { value: "foo" } };
const identity = (x) => x;

test("", () => {
  expect(targetValue(identity)(inputEvent)).toBe("foo");
});
