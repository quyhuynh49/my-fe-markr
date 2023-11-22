import React from 'react'
import clsx from 'clsx';

type InputProps = {
    className?: string;
    endAdornment?: React.ReactNode;
    placeholder?: string;
}

function Input({ endAdornment, className, placeholder }: InputProps) {
    return (
        <div className={clsx('relative w-[230px] h-[40px]', className)}>
            <input placeholder={placeholder} className='placeholder:text-[16px] placeholder:font-[400] text-[20px] font-[500] font-sst h-full w-full rounded-[40px] pl-[16px] pr-[50px] focus:outline-none' type="text" />
            {endAdornment && (<div className='absolute top-[50%] translate-y-[-50%] right-[16px] cursor-pointer'>{endAdornment}</div>)}
        </div>
    )
}

export default Input
