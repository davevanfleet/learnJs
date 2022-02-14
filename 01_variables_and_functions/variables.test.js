import { variable1, variable2, variable3, variable4 } from './variables'

test('variable1 equals 20', () => {
    expect(variable1).toBe(20);
});

test('variable2 equals \'hello\'', () => {
    expect(variable2).toBe('hello');
});

test('variable3 equals [1, 2, 3]', () => {
    expect(variable3).toBeInstanceOf(Array);
    expect(variable3.length).toBe(3);
    expect(variable3[0]).toBe(1);
    expect(variable3[1]).toBe(2);
    expect(variable3[2]).toBe(3);
});

test('variable4 equals {key: \'value\'', () => {
    expect(variable4.key).toBe('value');
});