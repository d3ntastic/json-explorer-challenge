import { useState } from 'react'
import getObjectValueByPath from 'utils/getObjectValueByPath'
import transformValueToString from 'utils/transformValueToString'

import Input from 'components/elements/Input'

interface Props {
    data: Record<string, unknown>
}

function JsonExplorer({ data }: Props) {
    const [currentPath, setCurrentPath] = useState<string | null>(null)
    const [currentValue, setCurrentValue] = useState<string | null>(null)

    const renderValue = (value: unknown, level = 0, path = 'res') => {
        if (value === null) return <span>null</span>
        if (value === undefined) return <span>undefined</span>
        if (typeof value === 'boolean') return <span>{value.toString()}</span>
        if (typeof value === 'number') return <span>{value}</span>
        if (typeof value === 'string') return <span>&quot;{value}&quot;</span>

        if (Array.isArray(value)) {
            if (value.length === 0) return <span>[]</span>

            return (
                <span>
                    <span>[</span>
                    <div className='ml-4'>
                        {value.map((item, index) => {
                            const usedPath = path ? `${path}[${index}]` : `[${index}]`
                            return (
                                <div key={usedPath}>
                                    {renderValue(item, level + 1, usedPath)}
                                    {index < value.length - 1 && <span>,</span>}
                                </div>
                            )
                        })}
                    </div>
                    <span>]</span>
                </span>
            )
        }

        if (typeof value === 'object') {
            const entries = Object.entries(value)
            if (entries.length === 0) return <span>{'{}'}</span>

            return (
                <span>
                    <span>{'{'}</span>
                    <div className='ml-4'>
                        {entries.map(([key, val], index) => {
                            const usedPath = path ? `${path}.${key}` : key
                            return (
                                <div key={key}>
                                    <button
                                        type='button'
                                        className='cursor-pointer text-blue-600 hover:underline'
                                        onClick={e => {
                                            e.preventDefault()
                                            setCurrentPath(usedPath)
                                            setCurrentValue(transformValueToString(val))
                                        }}
                                    >
                                        {key}
                                    </button>
                                    : {renderValue(val, level + 1, usedPath)}
                                    {index < entries.length - 1 && <span>,</span>}
                                </div>
                            )
                        })}
                    </div>
                    <span>{'}'}</span>
                </span>
            )
        }

        return <span>{String(value)}</span>
    }

    return (
        <>
            <div className='flex w-full items-center gap-4 overflow-x-scroll lg:overflow-x-auto'>
                <Input
                    className='w-[250px]'
                    value={currentPath ?? ''}
                    onChange={e => {
                        setCurrentPath(e.target.value)
                        setCurrentValue(getObjectValueByPath({ res: data }, e.target.value))
                    }}
                />
                <div className='text-xl'>→</div>
                <div>{currentValue ?? 'undefined'}</div>
            </div>
            <div className='mt-4 h-[500px] overflow-y-scroll border p-4'>{renderValue(data)}</div>
        </>
    )
}

export default JsonExplorer
