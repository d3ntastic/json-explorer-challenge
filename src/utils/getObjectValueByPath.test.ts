import getObjectValueByPath from 'utils/getObjectValueByPath'
import { describe, expect, it } from 'vitest'

describe('getObjectValueByPath', () => {
    it('should return the value at the given path', () => {
        const obj = { a: { b: { c: 42 } } }
        const path = 'a.b.c'
        const result = getObjectValueByPath(obj, path)
        expect(result).toBe('42')
    })

    it('should return undefined for non-existing path', () => {
        const obj = { a: { b: { c: 42 } } }
        const path = 'a.b.d'
        const result = getObjectValueByPath(obj, path)
        expect(result).toBe('undefined')
    })

    it('should return the value at the given path in an array (dot notation)', () => {
        const obj = { a: [{ b: 42 }] }
        const path = 'a.0.b'
        const result = getObjectValueByPath(obj, path)
        expect(result).toBe('42')
    })

    it('should return the value at the given path in an array (array notation)', () => {
        const obj = { a: [{ b: 41 }, { b: 42 }] }
        const path = 'a[1].b'
        const result = getObjectValueByPath(obj, path)
        expect(result).toBe('42')
    })

    it('should return undefined for out of bounds array index', () => {
        const obj = { a: [{ b: 42 }] }
        const path = 'a.1.b'
        const result = getObjectValueByPath(obj, path)
        expect(result).toBe('undefined')
    })

    it('should return null if the value at the path is null', () => {
        const obj = { a: { b: null } }
        const path = 'a.b'
        const result = getObjectValueByPath(obj, path)
        expect(result).toBe('null')
    })

    it('should return undefined if the value at the path is undefined', () => {
        const obj = { a: { b: undefined } }
        const path = 'a.b'
        const result = getObjectValueByPath(obj, path)
        expect(result).toBe('undefined')
    })
})
