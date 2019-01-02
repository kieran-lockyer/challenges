// let assert = require('assert')

function add(...nums) {
    return nums.reduce((a, b) => a + b, 0)
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

let assert = require('assert')

describe('Calculator', function () {
    context('Add', function () {
        it('Should return 2 when 1 and 1 entered', function () {
            assert.equal(add(1, 1), 2)
        })
        it('Should return 4 when 2 and 2 entered', function () {
            assert.equal(add(2, 2), 4)
        })
        it('Should return 20 when 10 and 10 entered', function () {
            assert.equal(add(10, 10), 20)
        })
        it('Should return 1000 when 100 is entered 10 times', function () {
            assert.equal(add(100, 100, 100, 100, 100, 100, 100, 100, 100, 100), 1000)
        })
        it('Should return 8 when 2 is entered 4 times', function () {
            assert.equal(add(2, 2, 2, 2), 8)
        })
    })
    context('Subtract', function () {
        it('Should return 1 when 2 and 1 entered', function () {
            assert.equal(subtract(2, 1), 1)
        })
        it('Should return 2 when 4 and 2 entered', function () {
            assert.equal(subtract(4, 2), 2)
        })
        it('Should return 10 when 20 and 10 entered', function () {
            assert.equal(subtract(20, 10), 10)
        })
    })
    context('Multiply', function () {
        it('Should return 4 when 2 and 2 entered', function () {
            assert.equal(multiply(2, 2), 4)
        })
        it('Should return 9 when 3 and 3 entered', function () {
            assert.equal(multiply(3, 3), 9)
        })
        it('Should return 100 when 10 and 10 entered', function () {
            assert.equal(multiply(10, 10), 100)
        })
    })
    context('Divide', function () {
        it('Should return 2 when 4 and 2 entered', function () {
            assert.equal(divide(4, 2), 2)
        })
        it('Should return 3 when 9 and 3 entered', function () {
            assert.equal(divide(9, 3), 3)
        })
        it('Should return 10 when 100 and 10 entered', function () {
            assert.equal(divide(100, 10), 10)
        })
    })
})