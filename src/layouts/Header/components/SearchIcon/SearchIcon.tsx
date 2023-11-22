import React from 'react'

type SearchIconProps = {
    className?: string;
}

function SearchIcon({ className }: SearchIconProps) {
    return (
        <svg className={className} width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.7393 28.5L21.9487 22.7094M21.9487 22.7094C22.9392 21.7189 23.7249 20.543 24.2609 19.2488C24.797 17.9547 25.0729 16.5676 25.0729 15.1668C25.0729 13.766 24.797 12.379 24.2609 11.0848C23.7249 9.79065 22.9392 8.61475 21.9487 7.62424C20.9582 6.63373 19.7823 5.84802 18.4881 5.31196C17.1939 4.77591 15.8069 4.5 14.4061 4.5C13.0053 4.5 11.6182 4.77591 10.3241 5.31196C9.0299 5.84802 7.854 6.63373 6.8635 7.62424C4.86308 9.62466 3.73926 12.3378 3.73926 15.1668C3.73926 17.9958 4.86308 20.709 6.8635 22.7094C8.86391 24.7098 11.5771 25.8336 14.4061 25.8336C17.2351 25.8336 19.9482 24.7098 21.9487 22.7094Z" stroke="#2C2C2C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default SearchIcon

