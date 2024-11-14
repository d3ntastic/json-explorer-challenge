import transformValueToString from 'utils/transformValueToString'
import { describe, expect, it } from 'vitest'

describe('transformValueToString', () => {
    it('should transform an array to a string', () => {
        expect(transformValueToString([1, 2, 3])).toBe('Array[3]')
    })

    it('should transform an object to a string', () => {
        expect(transformValueToString({ a: 1, b: 2 })).toBe('Object(a, b)')
    })

    it('should transform a string to a string', () => {
        expect(transformValueToString('hello')).toBe('hello')
    })

    it('should transform a number to a string', () => {
        expect(transformValueToString(123)).toBe('123')
    })

    it('should transform a boolean to a string', () => {
        expect(transformValueToString(true)).toBe('true')
    })

    it('should transform null to a string', () => {
        expect(transformValueToString(null)).toBe('null')
    })

    it('should transform undefined to a string', () => {
        expect(transformValueToString(undefined)).toBe('undefined')
    })

    it('should transform a nested object to a string', () => {
        expect(transformValueToString({ a: { b: 2 } })).toBe('Object(a)')
    })

    it('should transform an empty array to a string', () => {
        expect(transformValueToString([])).toBe('Array[0]')
    })

    it('should transform an empty object to a string', () => {
        expect(transformValueToString({})).toBe('Object()')
    })
})
