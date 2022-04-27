import operate from '../logic/operate';

describe('Test operators perform specific operator function', () => {
  it('test + operator adds two numbers', () => {
    expect(operate('55', '7', '+')).toEqual('62');
  });
  it('test - operator subtracts two numbers', () => {
    expect(operate('3', '2', '-')).toEqual('1');
  });
  it('test x operator multiplies two numbers', () => {
    expect(operate('4', '3', 'x')).toEqual('12');
  });
  it('test ÷ operator divides two numbers', () => {
    expect(operate('60', '5', '÷')).toEqual('12');
  });
  it('test error for Cant divide by 0', () => {
    expect(operate('60', '0', '÷')).toBe("Can't divide by 0.");
  });
  it('test % operator leaves modulus of two numbers', () => {
    expect(operate('16', '2', '%')).toEqual('0');
  });
  it('test error for modulo Cant divide by 0', () => {
    expect(operate('8', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
  it('test + operator adds two numbers', () => {
    expect(operate('55', '7', '+')).toEqual('62');
  });
  it('test / symbol is unknown operation and throws error', () => {
    expect(() => operate('7', '7', '/')).toThrow('Unknown operation \'/\'');
  });
});
