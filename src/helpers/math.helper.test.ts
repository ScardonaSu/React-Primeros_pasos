

import {describe, expect, test} from 'vitest'
import { add, multiply, subtract } from './math.helper'


describe('add', ()=> {

    test('should add two positive numbers', () => {
    
    
        
        //1. Arrange
        const result = add(1,3)
        
        //2. Act
        console.log({result});
        
        //3. Assert
        expect(result).toBe(4)
    
    
    })
    

})

describe('subtract', ()=> {

    test('Should subtract two negative numbeers', () => {

            const a = 5
            const b = 4
            
            //1. Arrange
            const result = subtract(a,b)
            
            //2. Act
            console.log({result});
            
            //3. Assert
            expect(result).toBe(a-b)

    })

})


describe('multiply', ()=> {
    test('Should multiply two numbers', () => {

        const a = 5
        const b = 5

        const result = multiply(a,b)

        expect(result).toBe(a * b)

    })
})


describe('multiply', ()=> {

    test('Should multiply two numbers', ()=> {

        const a = 3
        const b = 4

        const result = multiply(a,b)

        expect(result).toBe(12)


    })

})

