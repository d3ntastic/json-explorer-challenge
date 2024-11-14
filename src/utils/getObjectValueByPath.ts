import transformValueToString from 'utils/transformValueToString'

const getObjectValueByPath = (obj: Record<string, unknown>, path: string): string => {
    const value = path
        .replace(/\[(\w+)\]/g, '.$1')
        .split('.')
        .reduce((acc, key) => {
            if (acc === null || acc === undefined) return acc
            if (Array.isArray(acc)) {
                const index = parseInt(key, 10)
                return acc[index]
            }
            return acc[key]
        }, obj)
    return transformValueToString(value)
}

export default getObjectValueByPath
