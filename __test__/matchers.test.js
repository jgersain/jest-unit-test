describe("comparadores comunes", () => {
  const user = {
    name: "José",
    lastName: "Gersain"
  }
  const user2 = {
    name: "José",
    lastName: "Gersain"
  }
  const user3 = {
    name: "Joshep",
    lastName: "Gersain"
  }
  test("igualdad de elementos", () => {
    expect(user).toEqual(user2)
  });
  test("no son exactamente iguales", () => {
    expect(user).not.toEqual(user3)
  });
})