import React from 'react'
import File from '../icons/File'
import Close from '../icons/Close';
import clsx from 'clsx';

type FileInputProps = {
    title: string
    onChange: (file: File | null) => void
    onDelete: (file: File | null) => void
    variant?: 'main' | 'secondary'
    additionalKey?: string // for additional details to render list of file but each file is unique because we use htmlFor if label bind data to input
}

function FileInput({ title, variant, additionalKey, onChange, onDelete }: FileInputProps) {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const inputFile = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    return (
        <div className={clsx(
            'w-full rounded-[8px] px-[16px] py-[10px]',
            MAPPING_VARIANT_DEFAULT[variant || 'main']
        )}>
            <div className='flex items-center justify-between'>
                <div className='text-[14px] font-[400] font-sst text-[#2C2C2C]'>{title}</div>
                <input
                    ref={inputFile}
                    type="file"
                    id={additionalKey || title}
                    className='hidden'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const file = event.target.files?.[0] || null;
                        setSelectedFile(file);
                        onChange(file);
                    }}
                />
                <label className='cursor-pointer' htmlFor={additionalKey || title}><File /></label>
            </div>

            {selectedFile ? <div className='flex items-center justify-between'>
                <span className='text-[#003C71] text-[14px] font-[400] font-sst'>{selectedFile.name}</span>
                <button onClick={() => {
                    setSelectedFile(null)
                    onDelete(selectedFile)
                    /* to fix case: choose File 1 -> remove -> choose again File 1 (cannot) */
                    if (inputFile.current) {
                        inputFile.current.value = "";
                        inputFile.current.type = "text";
                        inputFile.current.type = "file";
                    }
                }}><Close /></button>

            </div> : <div className={clsx(
                'text-[14px] font-[400] font-sst',
                MAPPING_VARIANT_COLOR_DEFAULT[variant || 'main']
            )}>Upload file</div>}


        </div>
    )
}

export default FileInput
const MAPPING_VARIANT_DEFAULT: { [key: string]: string } = {
    main: 'border border-[#2C2C2C] bg-[#C3DAFE]',
    secondary: 'border border-[#6DA2F7] bg-[#E8F1FF]',
}

const MAPPING_VARIANT_COLOR_DEFAULT: { [key: string]: string } = {
    main: 'text-[#708FBF]',
    secondary: 'text-[#6DA2F7]',
}