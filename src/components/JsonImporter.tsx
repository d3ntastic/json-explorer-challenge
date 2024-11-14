import { Dispatch, SetStateAction, useRef, useState } from 'react'

import Button from 'components/elements/Button'
import Input from 'components/elements/Input'
import TextArea from 'components/elements/TextArea'

interface Props {
    setData: Dispatch<SetStateAction<string>>
}

function JsonImporter({ setData }: Props) {
    const [errorField, setErrorField] = useState<'url' | 'json' | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isPending, setIsPending] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const downloadJson = async () => {
        setIsPending(true)
        try {
            const result = await fetch(inputRef.current?.value ?? '')
            const json = await result.json()
            setData(JSON.stringify(json, null, 2))
            setIsPending(false)
        } catch (error: any) {
            const message = error.message.startsWith('Unexpected token') ? 'Invalid JSON' : error.message
            setErrorMessage(message)
            setErrorField('url')
            setIsPending(false)
        }
    }

    const parseJson = () => {
        try {
            JSON.parse(textareaRef.current?.value ?? '')
            setData(textareaRef.current?.value ?? '')
        } catch (error: any) {
            setErrorMessage(error.message)
            setErrorField('json')
        }
    }

    return (
        <div className='flex flex-col gap-8'>
            <div>
                <Input ref={inputRef} className='mx-auto mt-4 w-full' placeholder='Paste URL here' />
                {errorMessage && errorField === 'url' && <div className='text-center text-red-500'>{errorMessage}</div>}
                <Button disabled={isPending} onClick={downloadJson} className='mx-auto mt-4 lg:w-1/4'>
                    {isPending ? 'Loading...' : 'Download and explore JSON'}
                </Button>
            </div>
            <div className='text-center'>OR</div>
            <div>
                <TextArea ref={textareaRef} className='h-[300px] w-full' placeholder='Paste JSON here' />
                {errorMessage && errorField === 'json' && <div className='text-center text-red-500'>{errorMessage}</div>}
                <Button onClick={parseJson} className='mx-auto mt-4 lg:w-1/4'>
                    Explore JSON
                </Button>
            </div>
        </div>
    )
}

export default JsonImporter
