import React, { useEffect, useRef, useState } from 'react'
import ArrowDown from '../icons/ArrowDown';
import clsx from 'clsx';
import './index.css';

type DataResponseType = {
    id: number
    attributes: {
        title: string
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}


type SelectProps = {
    variant?: 'main' | 'secondary'
    className?: string
    title: string
    onChange: (value: string) => void
    data: DataResponseType[]
}

function Select({ className, title, variant, data, onChange }: SelectProps) {
    const [isDisplayed, setIsDisplayed] = React.useState(false);
    const [selected, setSelected] = useState("");

    let dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let handler = (e: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsDisplayed(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    return (
        <div className={clsx('relative w-full rounded-[8px] px-[16px] py-[10px]', className,
            MAPPING_VARIANT_DEFAULT[variant || 'main']
        )}>
            <div className='flex items-center justify-between'>
                <div className='text-[14px] font-[400] font-sst text-[#2C2C2C]'>{title}</div>
                <button onClick={() => setIsDisplayed(prev => !prev)
                }><ArrowDown /></button>
            </div>
            <div className={clsx('text-[14px] font-[400] font-sst', selected ? 'text-[#003C71]' : MAPPING_VARIANT_COLOR_DEFAULT[variant || 'main'])}>
                {selected ? selected : "Please select one"}
            </div>

            {isDisplayed && (
                <div ref={dropdownRef} id='custom-scrollbar-select' className='max-h-[180px] z-10 bg-[#ffffff] shadow-2xl absolute w-full rounded-[8px] top-[calc(100%+4px)] left-0 overflow-hidden overflow-y-auto'>
                    {data.map((value) => (
                        <div
                            onClick={() => {
                                if (value.attributes.title.toLowerCase() !== selected.toLowerCase()) {
                                    if (onChange) onChange(value.attributes.title)
                                    setSelected(value.attributes.title)
                                    setIsDisplayed(false)
                                }
                            }}
                            key={value.id}
                            className={clsx(
                                'px-[16px] py-[10px] hover:bg-[#C3DAFE] hover:text-[#708FBF] hover:cursor-pointer text-[14px] font-[400] font-sst text-[#2C2C2C]',
                                value.attributes.title.toLowerCase() === selected.toLowerCase() && 'bg-[#C3DAFE] text-[#708FBF]'
                            )}
                        >
                            {value.attributes.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Select

const MAPPING_VARIANT_DEFAULT: { [key: string]: string } = {
    main: 'border border-[#2C2C2C] bg-[#C3DAFE]',
    secondary: 'border border-[#6DA2F7] bg-[#E8F1FF]',
}

const MAPPING_VARIANT_COLOR_DEFAULT: { [key: string]: string } = {
    main: 'text-[#708FBF]',
    secondary: 'text-[#6DA2F7]',
}