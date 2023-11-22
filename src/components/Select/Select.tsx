import React, { useEffect, useRef, useState } from 'react'
import ArrowDown from '../icons/ArrowDown';
import clsx from 'clsx';
import './index.css';

type SelectProps = {
    className?: string
    title: string
    onChange: (value: string) => void
}

function Select({ className, title, onChange }: SelectProps) {
    const [isDisplayed, setIsDisplayed] = React.useState(false);
    const [selected, setSelected] = useState("");

    let dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let handler = (e: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsDisplayed(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    return (
        <div className={clsx('relative w-full bg-[#C3DAFE] border rounded-[8px] px-[16px] py-[10px] border-[#2C2C2C]', className
        )}>
            <div className='flex items-center justify-between'>
                <div className='text-[14px] font-[400] font-sst text-[#2C2C2C]'>{title}</div>
                <button onClick={() => setIsDisplayed(prev => !prev)
                }><ArrowDown /></button>
            </div>
            <div className='text-[14px] font-[400] font-sst text-[#708FBF]'>
                {selected ? selected : "Please select one"}

            </div>

            {isDisplayed && (
                <div ref={dropdownRef} className='max-h-[180px] z-10 bg-[#ffffff] shadow-xl absolute border border-[#2C2C2C] w-full rounded-[8px] top-[calc(100%+4px)] left-0 overflow-hidden overflow-y-auto'>
                    {MOCK_DATA.data.map((value: MOCK_DATA_TYPE) => (
                        <div
                            onClick={() => {
                                if (value.attributes.title.toLowerCase() !== selected.toLowerCase()) {
                                    if (onChange) onChange(value.attributes.title)
                                    setSelected(value.attributes.title)
                                    setIsDisplayed(false)
                                }
                            }}
                            key={value.id}
                            className={clsx(
                                'select-item px-[16px] py-[10px] hover:bg-[#C3DAFE] hover:text-[#708FBF] hover:cursor-pointer text-[14px] font-[400] font-sst text-[#2C2C2C]',
                                value.attributes.title.toLowerCase() === selected.toLowerCase() && 'bg-[#C3DAFE] text-[#708FBF]'
                            )}
                        >
                            {value.attributes.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Select


type MOCK_DATA_TYPE = {
    id: number
    attributes: {
        title: string
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}

const MOCK_DATA = {
    data: [
        {
            id: 1,
            attributes: {
                title: "New Full",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 2,
            attributes: {
                title: "New Abridge",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 3,
            attributes: {
                title: "New Expedited",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 4,
            attributes: {
                title: "New Partial 1",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 5,
            attributes: {
                title: "New Partial 2",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 6,
            attributes: {
                title: "New Concise",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 7,
            attributes: {
                title: "New Reliance",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 8,
            attributes: {
                title: "New - Change Notification",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 9,
            attributes: {
                title: "Special Access",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 10,
            attributes: {
                title: "Non - MD",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 11,
            attributes: {
                title: "CMDN",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 12,
            attributes: {
                title: "CMDR",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 13,
            attributes: {
                title: "Combo",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        },
        {
            id: 14,
            attributes: {
                title: "BSC Country Master",
                createdAt: "2023-11-14T08:31:20.032Z",
                updatedAt: "2023-11-14T08:33:57.006Z",
                publishedAt: "2023-11-14T08:33:56.995Z"
            }
        }
    ],
    meta: {
        pagination: {
            page: 1,
            pageSize: 25,
            pageCount: 1,
            total: 1
        }
    }
}