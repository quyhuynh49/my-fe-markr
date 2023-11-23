import React from 'react'
import FileInput from '../../../../../components/FileInput'
import Plus from '../../../../../components/icons/Plus'

type AdditionalFileInputProps = {
    title: string
    onChange: (file: File | null) => void
    onDelete: (file: File | null) => void
}

function AdditionalFileInput({ title, onChange, onDelete }: AdditionalFileInputProps) {
    const [temp, setTemp] = React.useState(['']);

    return (
        <div className="grid grid-cols-4 gap-[16px]">
            {temp.map((_, index) => {
                return <div key={index}>
                    <FileInput
                        onChange={(file) => onChange(file)}
                        onDelete={(file) => onDelete(file)}
                        additionalKey={title + index.toString()}
                        variant="secondary"
                        title={title}
                    />
                    <div className='text-[#003C71] text-[12px] leading-[16px font-[400] font-sst'>
                        Acceptable File formats: .pdf, .doc, .xls<br />Max file size: 50mb
                    </div>
                </div>
            })}
            <button className='flex items-center gap-[8px] pb-[46px]' onClick={() => setTemp(prev => [...prev, ''])}>
                <Plus />
                <span className='text-[18px] font-[400] font-sst text-[#0066CC]'>{title.toUpperCase()}</span>
            </button>
        </div>
    )
}

export default AdditionalFileInput
