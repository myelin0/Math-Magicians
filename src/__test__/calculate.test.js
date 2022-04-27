import calculate from '../logic/calculate';

test('If button is AC do we return an object', () => {
  expect(calculate(7, 'AC')).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});

test('If button is 0 and obj.next is 0 return an empty object', () => {
  expect(calculate('0', '0')).toMatchObject({});
});

let inputObj = {
  total: null,
  next: null,
  operation: null,
};

describe('Calculator functions test', () => {
  test('Test the sum ', () => {
    inputObj = {
      total: '3',
      next: '2',
      operation: '+',
    };

    const { total } = calculate(inputObj, '=');
    expect(total).toBe('5');
  });

  test('Test subtraction ', () => {
    inputObj = {
      total: '3',
      next: '2',
      operation: '-',
    };

    const { total } = calculate(inputObj, '=');
    expect(total).toBe('1');
  });

  test('Test division ', () => {
    inputObj = {
      total: '4',
      next: '2',
      operation: '÷',
    };

    const { total } = calculate(inputObj, '=');
    expect(total).toBe('2');
  });

  test('Tests multiplication operation', () => {
    inputObj = {
      total: '2',
      next: '1',
      operation: 'x',
    };

    const { total } = calculate(inputObj, '=');
    expect(total).toBe('2');
  });

  test('Tests modulus operation', () => {
    inputObj = {
      total: '5',
      next: '2',
      operation: '%',
    };

    const { total } = calculate(inputObj, '=');
    expect(total).toBe('1');
  });

  test('Tests +- button', () => {
    inputObj = {
      total: '1',
      next: '5',
      operation: '-',
    };

    const { next } = calculate(inputObj, '+/-');
    expect(next).toBe('-5');
  });
});
