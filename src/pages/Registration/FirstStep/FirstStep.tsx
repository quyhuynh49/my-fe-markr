import { useState } from "react";
import Accordion from "../../../components/Accordion";
import Entry from "../../../components/Entry";
import Select from "../../../components/Select";
import HeadingLine from "../components/HeadingLine";

import DateInput from "../../../components/DateInput";
import FileInput from "../../../components/FileInput";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import { APPLICATION, CLASSIFICATION, DIVISION, GROUPING, REGISTRATION_STATUS, RULE } from "../../../data/mock";
import AdditionalFileInput from "./components/AdditionalFileInput/AdditionalFileInput";

function FirstStep() {
    /* License Information Entry */
    const [application, setApplication] = useState<string>('');
    const [registrationStatus, setRegistrationStatus] = useState<string>('');
    const [division, setDivision] = useState<string>('');
    const [registrationNo, setRegistrationNo] = useState<string>('');
    const [regApprovalDate, setRegApprovalDate] = useState<string>('');
    const [regExpiryDate, setRegExpiryDate] = useState<string>('');
    const [regSubmissionID, setRegSubmissionID] = useState<string>('');
    const [onlineSingleSubmissionID, setOnlineSingleSubmissionID] = useState<string>('');
    const [registeredProductSet, setRegisteredProductSet] = useState<string>('');
    const [classification, setClassification] = useState<string>('');
    const [rule, setRule] = useState<string>('');
    const [grouping, setGrouping] = useState<string>('');
    const [deviceCategory, setDeviceCategory] = useState<string>('');
    const [GMDN, setGMDN] = useState<File | null>(null);
    const [referenceCountry, setReferenceCountry] = useState<string>('');
    const [licenseOwner, setLicenseOwner] = useState<string>('');
    const [halalRegistration, setHalalRegistration] = useState<string>('');
    const [countryOfOrigin, setCountryOfOrigin] = useState<string>('');
    const [regCABSubmissionDate, setRegCABSubmissionDate] = useState<string>('');
    const [regCABApprovalDate, setRegCABApprovalDate] = useState<string>('');
    const [regEstSubmissionDate, setRegEstSubmissionDate] = useState<string>('');
    const [approvedIndication, setApprovedIndication] = useState<string>('');

    /* Non-MD Information */
    const [nonMDLetterSubmissionDate, setNonMDLetterSubmissionDate] = useState<string>('');
    const [nonMDLetterApprovalDate, setNonMDLetterApprovalDate] = useState<string>('');
    const [nonMDLetterExpiryDate, setNonMDLetterExpiryDate] = useState<string>('');
    const [nonMDApprovalNr, setNonMDApprovalNr] = useState<string>('');
    const [nonMDAccessFee, setNonMDAccessFee] = useState<string>('');

    /* Special Access */
    const [saType, setSAType] = useState<string>('');
    const [saSubmissionDate, setSASubmissionDate] = useState<string>('');
    const [saApprovalDate, setSAApprovalDate] = useState<string>('');
    const [saExpiryDate, setSAExpiryDate] = useState<string>('');
    const [saApprovalNumber, setSAApprovalNumber] = useState<string>('');
    const [saFee, setSAFee] = useState<string>('');

    /* Additional Details */
    const [cabCertificate, setCABCertificate] = useState<File[]>([]);
    const [productRegistration, setProductRegistration] = useState<File[]>([]);
    const [documentation, setDocumentation] = useState<File[]>([]);
    const [saApprovalNo, setSAApprovalNo] = useState<File[]>([]);
    const [attachment, setAttachment] = useState<File[]>([]);





    console.log(cabCertificate)

    return (
        <div>
            <HeadingLine heading="License Information" />

            <Accordion heading="License Information Entry" className="container">
                <div className="grid grid-cols-4 grid-rows-7 gap-[16px] py-[24px]">
                    <Select data={APPLICATION.data} title="Application" onChange={(value) => setApplication(value)} />
                    <Select data={REGISTRATION_STATUS.data} title="Registration Status" onChange={(value) => setRegistrationStatus(value)} />
                    <Select data={DIVISION.data} title="Division" onChange={(value) => setDivision(value)} />

                    <Input title="Registration No." placeholder="Please type here" onChange={(event) => setRegistrationNo(event.target.value)} />

                    <DateInput title="Reg. Approval Date" onChange={event => setRegApprovalDate(event.target.value)} />
                    <DateInput title="Reg. Expiry Date" onChange={event => setRegExpiryDate(event.target.value)} />

                    <Input title="Reg. Submission ID" placeholder="Please type here" onChange={(event) => setRegSubmissionID(event.target.value)} />
                    <Input title="Online Single Submission ID" placeholder="Please type here" onChange={(event) => setOnlineSingleSubmissionID(event.target.value)} />
                    <Input title="Registered Product Set" placeholder="Please type here" onChange={(event) => setRegisteredProductSet(event.target.value)} />

                    <Select data={CLASSIFICATION.data} title="Classification" onChange={(value) => setClassification(value)} />
                    <Select data={RULE.data} title="Rule" onChange={(value) => setRule(value)} />
                    <Select data={GROUPING.data} title="Grouping" onChange={(value) => setGrouping(value)} />
                    <Select data={GROUPING.data} title="Device Category" onChange={(value) => setDeviceCategory(value)} />

                    <FileInput onDelete={() => setGMDN(null)} variant="secondary" title="GMDN" onChange={(file) => setGMDN(file)} />
                    <Select data={GROUPING.data} title="Reference Country" onChange={(value) => setReferenceCountry(value)} />
                    <Input title="License Owner" placeholder="Please type here" onChange={(event) => setLicenseOwner(event.target.value)} />
                    <Input title="Halal Registration" placeholder="Please type here" onChange={(event) => setHalalRegistration(event.target.value)} />
                    <Select variant="secondary" data={GROUPING.data} title="Country of Origin" onChange={(value) => setCountryOfOrigin(value)} />

                    <DateInput title="Reg. CAB Submission Date" onChange={event => setRegCABSubmissionDate(event.target.value)} />
                    <DateInput title="Reg. CAB Approval Date" onChange={event => setRegCABApprovalDate(event.target.value)} />
                    <DateInput variant="secondary" title="Reg. Est. Submission Date" onChange={event => setRegEstSubmissionDate(event.target.value)} />

                    <TextArea onChange={(event) => setApprovedIndication(event.target.value)} title="Approved indication" className="col-span-2 row-span-2" />

                </div>
            </Accordion>

            {/* Non-MD Information */}
            {application === 'Non - MD' && (
                <Accordion heading="Non-MD Information" className="container">
                    <div className="grid grid-cols-4 grid-rows-2 gap-[16px] py-[24px]">
                        <DateInput variant="secondary" title="Non-MD Letter Submission Date" onChange={event => setNonMDLetterSubmissionDate(event.target.value)} />
                        <DateInput variant="secondary" title="Non-MD Letter Approval Date" onChange={event => setNonMDLetterApprovalDate(event.target.value)} />
                        <DateInput variant="secondary" title="Non-MD Letter Expiry Date" onChange={event => setNonMDLetterExpiryDate(event.target.value)} />
                        <Input variant="secondary" title="Non-MD Approval Nr." placeholder="Please type here" onChange={(event) => setNonMDApprovalNr(event.target.value)} />
                        <Input variant="secondary" title="Non-MD Access Fee" placeholder="Please type here" onChange={(event) => setNonMDAccessFee(event.target.value)} />
                    </div>
                </Accordion>
            )}

            {/* Special Access */}
            {application === 'Special Access' && (
                <Accordion heading="Special Access" className="container">
                    <div className="grid grid-cols-4 grid-rows-2 gap-[16px] py-[24px]">
                        <Select variant="secondary" data={GROUPING.data} title="SA Type" onChange={(value) => setSAType(value)} />
                        <DateInput variant="secondary" title="SA Submission Date" onChange={event => setSASubmissionDate(event.target.value)} />
                        <DateInput variant="secondary" title="SA Approval Date" onChange={event => setSAApprovalDate(event.target.value)} />
                        <DateInput variant="secondary" title="SA Expiry Date" onChange={event => setSAExpiryDate(event.target.value)} />
                        <Input variant="secondary" title="SA Approval Number" placeholder="Please type here" onChange={(event) => setSAApprovalNumber(event.target.value)} />
                        <Input variant="secondary" title="SA Fee" placeholder="Please type here" onChange={(event) => setSAFee(event.target.value)} />
                    </div>
                </Accordion>
            )}

            <HeadingLine heading="Additional Details" />
            <Accordion heading="Additional Details" className="container">
                <div className="grid gap-[16px] py-[24px]">
                    <AdditionalFileInput
                        onDelete={(file) => {
                            /* remove from list file */
                            if (file) {
                                const idx = cabCertificate.indexOf(file);
                                let temp = [...cabCertificate];
                                temp.splice(idx, 1);
                                setCABCertificate(temp);
                            }
                        }}
                        title="CAB Certificate"
                        onChange={(file) => {
                            if (file) setCABCertificate(prev => [...prev, file])
                        }}
                    />


                    <AdditionalFileInput
                        onDelete={(file) => {
                            if (file) {
                                const idx = productRegistration.indexOf(file);
                                let temp = [...productRegistration];
                                temp.splice(idx, 1);
                                setProductRegistration(temp);
                            }
                        }}
                        title="Product Registration"
                        onChange={(file) => {
                            if (file) setProductRegistration(prev => [...prev, file])
                        }}
                    />


                    <AdditionalFileInput
                        onDelete={(file) => {
                            if (file) {
                                const idx = documentation.indexOf(file);
                                let temp = [...documentation];
                                temp.splice(idx, 1);
                                setDocumentation(temp);
                            }
                        }}
                        title="Documentation"
                        onChange={(file) => {
                            if (file) setDocumentation(prev => [...prev, file])
                        }}
                    />



                    <AdditionalFileInput
                        onDelete={(file) => {
                            if (file) {
                                const idx = saApprovalNo.indexOf(file);
                                let temp = [...saApprovalNo];
                                temp.splice(idx, 1);
                                setSAApprovalNo(temp);
                            }
                        }}
                        title="SA Approval No"
                        onChange={(file) => {
                            if (file) setSAApprovalNo(prev => [...prev, file])
                        }}
                    />


                    <AdditionalFileInput
                        onDelete={(file) => {
                            if (file) {
                                const idx = attachment.indexOf(file);
                                let temp = [...attachment];
                                temp.splice(idx, 1);
                                setAttachment(temp);
                            }
                        }}
                        title="Attachment"
                        onChange={(file) => {
                            if (file) setAttachment(prev => [...prev, file])
                        }}
                    />
                </div>
            </Accordion>
            <HeadingLine heading="UPN" />
            <Accordion heading="UPN Information" className="container">
                <Entry text="UPLOAD FILE" className="mb-[16px] mt-[24px]" />
                <Entry text="UPN ENTRY MANUALLY" />
            </Accordion>
        </div>
    )
}

export default FirstStep