import Button from '../../components/Button';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import Stepper from './components/Stepper';
import { useMultiStepContext } from './context/MultiStepProvider';

function Registration() {

    const { currentStep, setCurrentStep } = useMultiStepContext();

    const showStep = (currentStep: number) => {
        switch (currentStep) {
            case 1:
                return <FirstStep />
            case 2:
                return <SecondStep />
            default:
        }
    }

    return (
        <div>
            {/* stepper progress bar */}
            <div className='h-[200px] flex justify-center items-center'>
                <Stepper currentStep={currentStep} />
            </div>
            {/* show step ui */}
            {showStep(currentStep)}
            {/* buttons to navigate or submit or save as draft */}
            <div className='flex justify-center gap-[16px] my-[32px]'>
                {currentStep > 1 ? <Button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    variant="outlined"
                >Previous</Button> : <Button
                    disabled
                    variant="outlined"
                >Previous</Button>}
                {currentStep < 2 ? <Button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    variant="contained"
                >Next</Button> : <Button variant="contained">Submit</Button>}
                <Button variant="text">Save as Draft</Button>
            </div>

        </div>
    )
}

export default Registration
