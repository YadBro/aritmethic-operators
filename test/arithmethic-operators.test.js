import {addition, subtraction} from '@yadiganteng32/aritmetic-operators';

test('should add 2 numbers', () => { 
  const add = addition(1, 1);

  expect(add).toBe(2);
})

test('should less 2 numbers', () => { 
  const less = subtraction(5, 1);

  expect(less).toBe(4);
})