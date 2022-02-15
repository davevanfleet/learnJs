import answers from './variables'

test('variable1 equals 20', () => {
    expect(answers.variable1).toBe(20);
});

test("variable2 equals 'hello'", () => {
    expect(answers.variable2).toBe('hello');
});

test('variable3 equals [1, 2, 3]', () => {
    expect(answers.variable3).toBeInstanceOf(Array);
    expect(answers.variable3.length).toBe(3);
    expect(answers.variable3[0]).toBe(1);
    expect(answers.variable3[1]).toBe(2);
    expect(answers.variable3[2]).toBe(3);
});

test("variable4 equals {key: 'value'", () => {
    expect(answers.variable4.key).toBe('value');
});