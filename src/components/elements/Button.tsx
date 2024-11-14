import classNames from 'classnames'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
    <button
        type='button'
        {...props}
        ref={ref}
        className={classNames(
            'block items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            className
        )}
    />
))

export default Button
