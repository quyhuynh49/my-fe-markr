import clsx from 'clsx'
import React from 'react'

type ButtonProps = {
    children?: string | React.ReactNode
    variant?: 'contained' | 'outlined' | 'text'
    onClick?: () => void
    disabled?: boolean
}

function Button({ children, variant, disabled, onClick }: ButtonProps) {
    return (
        <div>
            <button
                onClick={onClick}
                className={clsx(
                    'min-w-[292px] h-[40px] rounded-[30px] font-sst font-[700] text-[20px]',
                    disabled ? 'bg-[#C2C2C2] text-[#ffffff]' : MAPPING_BUTTON_STYLE_DEFAULT[variant || 'text']
                )}
            >{children}</button>
        </div>
    )
}

export default Button

const MAPPING_BUTTON_STYLE_DEFAULT: { [key: string]: string } = {
    contained: 'bg-[#003C71] text-[#ffffff]',
    outlined: 'border border-[#003C71] text-[#003C71]',
    text: 'text-[#003C71]'
}