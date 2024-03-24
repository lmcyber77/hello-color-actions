const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
const hello = () => "Hello World from Jersey City and NOT NYC";
expect(hello.hello()).toEqual("");
  });
});
