import { calculateCost } from "../libs/billing-lib";

test("Lowest tier", () => {
  // given
  const storage = 10;
  const cost = 4000;

  // when
  const expectedCost = calculateCost(storage);

  // then
  expect(cost).toEqual(expectedCost);
});

test("Middle tier", () => {
  // given
  const storage = 100;
  const cost = 20000;

  // when
  const expectedCost = calculateCost(storage);

  // then
  expect(cost).toEqual(expectedCost);
});

test("Highest tier", () => {
  // given
  const storage = 101;
  const cost = 10100;

  // when
  const expectedCost = calculateCost(storage);

  // then
  expect(cost).toEqual(expectedCost);
});