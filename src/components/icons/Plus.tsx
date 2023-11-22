import React from 'react'
type PlusProps = {
    className?: string
}

function Plus({ className }: PlusProps) {
    return (
        <svg className={className} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 12.1667C2 6.64375 6.477 2.16675 12 2.16675C17.523 2.16675 22 6.64375 22 12.1667C22 17.6897 17.523 22.1667 12 22.1667C6.477 22.1667 2 17.6897 2 12.1667ZM12 4.16675C9.87827 4.16675 7.84344 5.0096 6.34315 6.50989C4.84285 8.01018 4 10.045 4 12.1667C4 14.2885 4.84285 16.3233 6.34315 17.8236C7.84344 19.3239 9.87827 20.1667 12 20.1667C14.1217 20.1667 16.1566 19.3239 17.6569 17.8236C19.1571 16.3233 20 14.2885 20 12.1667C20 10.045 19.1571 8.01018 17.6569 6.50989C16.1566 5.0096 14.1217 4.16675 12 4.16675Z" fill="#0066CC" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13 7.16675C13 6.90153 12.8946 6.64718 12.7071 6.45964C12.5196 6.27211 12.2652 6.16675 12 6.16675C11.7348 6.16675 11.4804 6.27211 11.2929 6.45964C11.1054 6.64718 11 6.90153 11 7.16675V11.1667H7C6.73478 11.1667 6.48043 11.2721 6.29289 11.4596C6.10536 11.6472 6 11.9015 6 12.1667C6 12.432 6.10536 12.6863 6.29289 12.8739C6.48043 13.0614 6.73478 13.1667 7 13.1667H11V17.1667C11 17.432 11.1054 17.6863 11.2929 17.8739C11.4804 18.0614 11.7348 18.1667 12 18.1667C12.2652 18.1667 12.5196 18.0614 12.7071 17.8739C12.8946 17.6863 13 17.432 13 17.1667V13.1667H17C17.2652 13.1667 17.5196 13.0614 17.7071 12.8739C17.8946 12.6863 18 12.432 18 12.1667C18 11.9015 17.8946 11.6472 17.7071 11.4596C17.5196 11.2721 17.2652 11.1667 17 11.1667H13V7.16675Z" fill="#0066CC" />
        </svg>

    )
}

export default Plus
