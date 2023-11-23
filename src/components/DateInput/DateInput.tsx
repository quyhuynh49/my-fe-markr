import React from 'react'
import Calendar from '../icons/Calendar'
import clsx from 'clsx'

type DateInputProps = {
    title: string
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
    variant?: 'main' | 'secondary'

}

function DateInput({ title, variant, onChange }: DateInputProps) {
    const [date, setDate] = React.useState('');
    const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;


    const handleOnFocus = () => {
        ref.current.type = 'date';
        try {
            ref.current.showPicker();
        } catch (error) {
            /* Fall back to another picker mechanism */
        }
    }

    const handleOnBlur = () => {
        if (date.length === 0) ref.current.type = 'text';
    }

    const handleShowCalendar = () => {
        ref.current.type = 'date';
        try {
            ref.current.showPicker();
        } catch (error) {
            /* Fall back to another picker mechanism */
        }
    }
    return (
        <div className={clsx(
            'w-full rounded-[8px] px-[16px] py-[10px]',
            MAPPING_VARIANT_DEFAULT[variant || 'main']
        )}>
            <div className='flex items-center justify-between'>
                <div className='text-[14px] font-[400] font-sst text-[#2C2C2C]'>{title}</div>
                <button
                    onClick={handleShowCalendar}
                    onBlur={handleOnBlur}
                ><Calendar /></button>
            </div>

            <input
                ref={ref}
                className={clsx(
                    'w-full focus:outline-none text-[14px] font-[400] font-sst text-[#003C71]',
                    MAPPING_VARIANT_COLOR_DEFAULT[variant || 'main'],
                )}
                type="text"
                placeholder='Please select a date'
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                value={date}
                onChange={(event) => {
                    setDate(event.target.value)
                    onChange(event)
                }}
            />

        </div>
    )
}

export default DateInput
const MAPPING_VARIANT_DEFAULT: { [key: string]: string } = {
    main: 'border border-[#2C2C2C] bg-[#C3DAFE]',
    secondary: 'border border-[#6DA2F7] bg-[#E8F1FF]',
}

const MAPPING_VARIANT_COLOR_DEFAULT: { [key: string]: string } = {
    main: 'placeholder:text-[#708FBF] bg-[#C3DAFE]',
    secondary: 'placeholder:text-[#6DA2F7] bg-[#E8F1FF]',
}
