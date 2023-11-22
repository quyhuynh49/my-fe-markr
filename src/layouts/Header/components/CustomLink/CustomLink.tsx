import React from 'react'
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import clsx from 'clsx';

type CustomLinkProps = {
    startAdornment?: React.ReactNode;
}

export default function CustomLink({ startAdornment, children, to, ...props }: LinkProps & CustomLinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const baseStyles = 'h-[36px] flex items-center font-sst text-[16px] py-[7px] px-[16px] text-[#ffffff] font-[500] border border-[#ffffff] rounded-[30px]';

    const styles = clsx(
        baseStyles,
        MAPPING_STYLE_DEFAULT[`${match ? 'primary' : 'outline'}`]
    )

    return (
        <div>
            <Link className={styles}
                to={to}
                {...props}
            >
                {startAdornment && (
                    <span className='mr-[10px]'>{startAdornment}</span>
                )}
                {children}
            </Link>
        </div>
    )
}

const MAPPING_STYLE_DEFAULT: { [key: string]: string } = {
    primary: 'bg-[#3485FE] shadow-btn-header',
    outline: ''
}
