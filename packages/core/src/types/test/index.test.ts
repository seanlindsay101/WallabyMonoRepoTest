/** @overview Test functions for UUID type */

import { expect } from 'chai'
import { v4 } from 'is-uuid'

import { UUID } from '../index.js'

context("UUID Methods", () => {
  describe("UUID.generate()", () => {
    const id = UUID.generate();
    it("returns a valid UUID value", () => {
      expect(v4(id)).to.be.true;
    });
  });
});
context("Validity Checks", () => {
  const validUUID = "305406b8-ab5a-4a2c-ad95-b3cdb3f254e2";
  const invalidUUID = "305406b8-ab5a-3a2c-ad95-b3cdb3f254e2";
  describe("UUID.isValid([string UUID value])", () => {
    it("returns true when given a valid string UUID value", () => {
      expect(UUID.isValid(validUUID)).to.be.true;
    });
    it("returns false when given an invalid string UUID value", () => {
      expect(UUID.isValid(invalidUUID)).to.be.false;
    });
  });
});
