import React from 'react'
import Plus from '../icons/Plus'
import clsx from 'clsx'

type EntryProps = {
    text?: string
    className?: string
    onClick?: () => void
}

function Entry({ text, className, onClick }: EntryProps) {
    return (
        <div>
            <button onClick={onClick} className={clsx('flex items-center gap-[8px] px-[8xp] py-[4px]', className)}>
                <Plus />
                <span className='font-sst font-[400] text-[18px] text-[#0066CC]'>{text}</span>
            </button>
        </div>
    )
}

export default Entry
