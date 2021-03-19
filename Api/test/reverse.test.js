const { expect } = require("chai");
const request = require("supertest")("http://localhost:8080");

describe("GET /iecho", () => {
  describe("?text=stanley yelnats", () => {
    it("Should return status 200, the text reversed and palindrome is true", async () => {
      const response = await request.get("/iecho?text=stanley yelnats");
      expect(response.status).to.equal(200);
      expect(response.body.text).to.eql("stanley yelnats");
      expect(response.body.palindrome).to.eql(true);
    });
  });
  describe("?text=test", () => {
    it("Should return status 200, the text reversed and palindrome is false", async () => {
      const response = await request.get("/iecho?text=test");
      expect(response.status).to.eql(200);
      expect(response.body.text).to.eql("tset");
      expect(response.body.palindrome).to.eql(false);
    });
  });
  describe("?text=", () => {
    it("Should return status 400 and no text", async () => {
      const response = await request.get("/iecho");
      expect(response.status).to.eql(400);
      expect(response.body.error).to.eql("no text");
    });
  });
});
