const { returnTwo, greeting, add, multiply, divide, subtract,  } = require('./function')

test('return the int 2', () => {
    expect(returnTwo()).toBe(2)
})

test(`return a string "hello, name"`, () => {
    expect(greeting('James')).toEqual('Hello, James')
})


describe(`math functions`, () => {

    test(`return two numbers multiplied`, () => {
        expect(multiply(2, 4)).toEqual(8)
    })

    test(`return two numbers devided`, () => {
        expect(divide(4, 2)).toEqual(2)
    })

    test(`find the sum of two numbers`, () => {
        expect(add(5, 9)).toEqual(14)
    })

    test(`return two numbers subtracted`, () => {
        expect(subtract(4, 2)).toEqual(2)
    })
})