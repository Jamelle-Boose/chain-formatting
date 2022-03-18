const format = require("./index.js")

describe("format", () => {
  it("script will return type of data", () => {
    data = []
    expect(format(data)).toBe("array")
  })
})
