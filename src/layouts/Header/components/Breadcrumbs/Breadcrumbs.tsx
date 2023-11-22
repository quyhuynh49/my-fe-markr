import React from 'react';
import { Link, useLocation } from 'react-router-dom';


type BreadcrumbsProps = {
    className?: string;
}
function Breadcrumbs({ className }: BreadcrumbsProps) {
    const location = useLocation();
    let crumbLink = '';
    const crumbPath = location.pathname.split('/').filter(path => path !== '');

    return (
        <nav className={className} aria-label="breadcrumb">
            <ol className='flex font-sst gap-[10px] text-[#ffffff] font-[400]'>
                {crumbPath.map((crumb, index) => {
                    crumbLink += `/${crumb}`
                    return index === crumbPath.length - 1 ? (
                        <li key={index}>
                            <Link className='font-[700]' to={crumbLink} key={crumb}>{crumb.split('-').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')}</Link>
                        </li>
                    ) : (
                        <li key={index} className='flex gap-[10px]'>
                            <Link to={crumbLink} key={crumb}>{crumb.split('-').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')}</Link>
                            <span>/</span>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export default Breadcrumbs
