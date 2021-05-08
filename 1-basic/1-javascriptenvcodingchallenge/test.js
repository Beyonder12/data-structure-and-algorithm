const solution = require('./solution')

test("input 2 return 1", () => {
  expect(solution(2)).toBe(1);
});

test("input 3 return 2", () => {
  expect(solution(3)).toBe(2);
});

test("input 4 return 3", () => {
  expect(solution(4)).toBe(3);
});
