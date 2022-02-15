import answers from './dataTypes'

test('string is a String', () => {
    expect(typeof answers.string).toBe('string');
});

test('number is a Number', () => {
    expect(typeof answers.number).toBe('number');
});

test('undefinedLet is undefined', () => {
    expect(answers.undefinedLet).toBe(undefined);
});

test('nullConst is null', () => {
    expect(answers.nullConst).toBeNull();
});

test('array is an Array with 3 elements', () => {
    expect(answers.array).toBeInstanceOf(Array);
    expect(answers.array.length).toBe(3);
});

test('object is an Object with 1 key: value pair', () => {
    expect(answers.object).toBeInstanceOf(Object);
    expect(Object.keys(answers.object).length).toBe(1)
})