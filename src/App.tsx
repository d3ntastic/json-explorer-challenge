import { useState } from 'react'

import JsonExplorer from 'components/JsonExplorer'
import JsonImporter from 'components/JsonImporter'
import Button from 'components/elements/Button'

function App() {
    const [jsonObject, setJsonObject] = useState<string>('')

    return (
        <div className='flex h-screen'>
            <div className='container m-auto px-4'>
                <h1 className='mx-auto mb-8 text-center font-mono text-3xl font-bold'>JSON Explorer</h1>
                {jsonObject ? (
                    <div className='flex flex-col gap-4'>
                        <JsonExplorer data={JSON.parse(jsonObject)} />
                        <Button className='mx-auto w-1/4' onClick={() => setJsonObject('')}>
                            Reset
                        </Button>{' '}
                    </div>
                ) : (
                    <JsonImporter setData={setJsonObject} />
                )}
            </div>
        </div>
    )
}

export default App
