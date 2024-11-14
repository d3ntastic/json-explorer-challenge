const transformValueToString = (value: unknown): string => {
    if (Array.isArray(value)) return `Array[${value.length}]`
    if (typeof value === 'object' && value !== null) return `Object(${Object.keys(value).join(', ')})`
    return String(value)
}

export default transformValueToString
