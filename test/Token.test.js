const Token = artifacts.require("./Token");
require("chai").use(require("chai-as-promised")).should();

contract("Token", (accounts) => {
  let token;
  let symbol = "DANK";
  let decimals = "18";
  let totalSupply = "1000000000000000000000000";


  beforeEach(async() => {
    token = await Token.new();
  });



  describe("deployment", () => {


    it("tracks the name", async () => {
      const result = token.name();
      result.should.equal("Token contract");
    });

    it("tracks the symbol", async () => {
      const result = token.symbol();
      result.should.equal(symbol);
    });
    it("tracks the decimals", async () => {
      const result = token.decimals();
      result.toString().should.equal(decimals);
    });
    it("tracks the supply", async () => {
      const result = token.totalSupply();
      result.toString().should.equal(totalSupply);
    });
  });
});
