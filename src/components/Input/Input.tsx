import clsx from 'clsx'
import React from 'react'

type InputProps = {
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    title?: string
    variant?: 'main' | 'secondary'

}

function Input({ title, placeholder, variant, onChange }: InputProps) {
    return (
        <div className={clsx(
            'w-full rounded-[8px] px-[16px] py-[10px]',
            MAPPING_VARIANT_DEFAULT[variant || 'main']
        )}>
            <div className='text-[14px] font-[400] font-sst text-[#2C2C2C]'>{title}</div>
            <input
                onChange={(event) => onChange(event)}
                placeholder={placeholder}
                type="text"
                className={clsx(
                    'w-full focus:outline-none text-[14px] font-[400] font-sst text-[#003C71]',
                    MAPPING_VARIANT_COLOR_DEFAULT[variant || 'main']

                )} />
        </div>
    )
}

export default Input


const MAPPING_VARIANT_DEFAULT: { [key: string]: string } = {
    main: 'border border-[#2C2C2C] bg-[#C3DAFE]',
    secondary: 'border border-[#6DA2F7] bg-[#E8F1FF]',
}

const MAPPING_VARIANT_COLOR_DEFAULT: { [key: string]: string } = {
    main: 'placeholder:text-[#708FBF] bg-[#C3DAFE]',
    secondary: 'placeholder:text-[#6DA2F7] bg-[#E8F1FF]',
}