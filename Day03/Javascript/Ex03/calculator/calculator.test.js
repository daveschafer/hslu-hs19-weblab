const calculator = require('./calculator');

// 1. Teil

test('should sum two values', () => {
    calculator.read(1, 2);
    expect(calculator.sum()).toBe(3);
});

test('should mult two values', () => {
    calculator.read(2, 2);
    expect(calculator.mul()).toBe(4);
});

// 2. Teil

test('should sum more than two values', () => {
    calculator.read(1, 2, 3, 4);
    expect(calculator.sum()).toBe(10);
});

test('should mult more than two values', () => {
    calculator.read(1, 2, 3);
    expect(calculator.mul()).toBe(6);
});

test('should handle strings and convert it', () => {
    calculator.read(1, 2, '3');
    expect(calculator.mul()).toBe(6);
});

test('should handle strings and convert it', () => {
    calculator.read(1, '2', 4);
    expect(calculator.sum()).toBe(7);
});

test('should  throw error on invalid number value', () => {
    expect(() => {calculator.read(1, 'adba', 4)}).toThrowError(TypeError);
});