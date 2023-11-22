import React from 'react'
type HeadingLineProps = {
    heading: string
}

function HeadingLine({ heading }: HeadingLineProps) {
    return (
        <div className="h-[46px] w-full bg-[#CCE0FE] container flex items-center font-sst font-[700] text-[20px]">{heading}</div>
    )
}

export default HeadingLine
