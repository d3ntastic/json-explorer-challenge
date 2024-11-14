import classNames from 'classnames'
import { InputHTMLAttributes, forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
    <input
        {...props}
        ref={ref}
        className={classNames(
            'ease rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none',
            className
        )}
    />
))

export default Input
