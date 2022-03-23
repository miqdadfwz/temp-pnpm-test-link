const check = require("../check-hidden-mod");

describe("Check hidden module", () => {
  it("node_modules/.pnpm/node_modules does exist", () => {
    expect(check()).toBe(true);
  });
});
