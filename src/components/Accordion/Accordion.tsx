import React, { useState } from 'react'
import ArrowUp from '../icons/ArrowUp';
import clsx from 'clsx';

type AccordionProps = {
    className?: string
    heading?: string
    children?: string | React.ReactNode
}

function Accordion({ className, heading, children }: AccordionProps) {
    const [isDisplayed, setIsDisplayed] = useState(true);

    return (
        <div className={clsx('w-full px-[16px] py-[14px]', className)}>
            <div className='flex justify-between'>
                <div className='text-[#0055D4] font-sst font-[400] text-[20px]'>
                    {heading}
                </div>
                <button
                    onClick={() => setIsDisplayed(prev => !prev)}
                    className={clsx('transition-all duration-200',
                        isDisplayed ? 'rotate-180' : 'rotate-0'
                    )}><ArrowUp /></button>
            </div>
            <div className={clsx('',
                isDisplayed ? 'block pr-[56px]' : 'hidden'
            )}>{children}</div>
        </div>
    )
}

export default Accordion
