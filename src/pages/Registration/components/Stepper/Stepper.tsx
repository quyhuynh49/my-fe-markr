import React from 'react'
import './index.css'
import clsx from 'clsx';

type StepperProps = {
    currentStep: number
}





function Stepper({ currentStep }: StepperProps) {
    const steps = ['License Registration', 'Agency Information'];
    return (
        <div className='flex justify-center'>
            {
                steps.map((step, index) => (
                    <div key={index}
                        className='stepper-item'
                    >
                        <div className={clsx('transition-all z-10 flex items-center justify-center w-[60px] h-[60px] rounded-[40px]',
                            index + 1 === currentStep ? 'bg-[#6DA2F7]' : 'bg-[#C3DAFE]'
                        )}>
                            <span className={clsx('font-sst font-[700] text-[20px]',
                                index + 1 === currentStep ? 'text-[#2C2C2C]' : 'text-[#6DA2F7]'
                            )}>{index + 1}</span>
                        </div>
                        <p className={clsx(
                            "transition-all font-sst text-[18px] text-center stepper-step",
                            index + 1 === currentStep ? 'font-[700] text-[#2C2C2C]' : 'font-[400] text-[#E2E2E2]'
                        )}>{step}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Stepper
