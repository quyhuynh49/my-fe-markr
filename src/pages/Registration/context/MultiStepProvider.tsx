import React from 'react'

type MultiStepProviderProps = {
    children: React.ReactNode
}

type MultiStepContextProps = {
    currentStep: number
    setCurrentStep: (step: number) => void
}

const MultiStepContext = React.createContext<MultiStepContextProps>({
    currentStep: 1, // set a default value
    setCurrentStep: () => { },
});
export const useMultiStepContext = () => React.useContext(MultiStepContext);

function MultiStepProvider({ children }: MultiStepProviderProps) {
    const [currentStep, setCurrentStep] = React.useState<number>(1);

    const contextValue: MultiStepContextProps = {
        currentStep,
        setCurrentStep,
    }

    return (
        <MultiStepContext.Provider value={contextValue}>
            {children}
        </MultiStepContext.Provider>
    )
}

export default MultiStepProvider
