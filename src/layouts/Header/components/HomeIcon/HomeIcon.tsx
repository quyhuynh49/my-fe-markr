import React from 'react'

type HomeIconProps = {
    className?: string;
}

function HomeIcon({ className }: HomeIconProps) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10.1474L12 1L23 10.1474" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.58838 8.1792V23.0003H20.4119V8.1792" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default HomeIcon
