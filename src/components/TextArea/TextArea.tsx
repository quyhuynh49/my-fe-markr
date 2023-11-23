import clsx from 'clsx'
import React from 'react'

type TextAreaProps = {
    variant?: 'main' | 'secondary'
    className?: string
    title: string
    onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function TextArea({ variant, title, className, onChange }: TextAreaProps) {
    return (
        <div className={clsx(
            'w-full rounded-[8px] px-[16px] py-[10px]',
            MAPPING_VARIANT_DEFAULT[variant || 'main'],
            className
        )}>
            <div className='text-[14px] font-[400] font-sst text-[#2C2C2C]'>{title}</div>
            <textarea
                onChange={(event) => onChange(event)}
                placeholder='Please type here' className={clsx('focus:outline-none text-[#003C71] h-[calc(100%-22px)] w-full resize-none',
                    MAPPING_VARIANT_COLOR_DEFAULT[variant || 'main']
                )}></textarea>
        </div>
    )
}

export default TextArea
const MAPPING_VARIANT_DEFAULT: { [key: string]: string } = {
    main: 'border border-[#2C2C2C] bg-[#C3DAFE]',
    secondary: 'border border-[#6DA2F7] bg-[#E8F1FF]',
}

const MAPPING_VARIANT_COLOR_DEFAULT: { [key: string]: string } = {
    main: 'placeholder:text-[#708FBF] bg-[#C3DAFE]',
    secondary: 'placeholder:text-[#6DA2F7] bg-[#E8F1FF]',
}