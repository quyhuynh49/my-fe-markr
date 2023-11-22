import { useState } from "react";
import Accordion from "../../../components/Accordion";
import Entry from "../../../components/Entry";
import Select from "../../../components/Select";
import HeadingLine from "../components/HeadingLine";

function FirstStep() {
    const [application, setApplication] = useState('');
    console.log(application);

    return (
        <div className="mb-[24px]">
            <HeadingLine heading="License Information" />
            <Accordion heading="License Information Entry" className="container">
                <div className="container grid grid-cols-4 grid-rows-2 gap-[16px] py-[24px]">
                    <Select title="Application" onChange={(value) => setApplication(value)} />
                </div>
            </Accordion>


            <HeadingLine heading="Additional Details" />

            <HeadingLine heading="UPN" />
            <Accordion heading="UPN Information" className="container">
                <Entry text="UPLOAD FILE" className="mb-[16px] mt-[24px]" />
                <Entry text="UPN ENTRY MANUALLY" />
            </Accordion>
        </div>
    )
}

export default FirstStep

