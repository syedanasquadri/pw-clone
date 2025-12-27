import type { ReactElement } from "react"

interface BenefitsCardProps{
    Icon: ReactElement | string;
    Heading: string;
    SubHeading: string;
}

const BenefitsCard = ({Icon,Heading,SubHeading}: BenefitsCardProps) => {
    return <div className="border solid ">
            <div><span>{Icon}</span></div>
            <div className="text-md"><span>{Heading}</span></div>
            <div className="text-sm"><span>{SubHeading}</span></div>
            <div></div>
        </div>
}

export const Benefits = () => {
    return <div className="grid grid-cols-2 gap-4 place-content-center">
        <div><BenefitsCard Icon={"Cam"} Heading="Daily Live " SubHeading="Interactive classes"/></div>
        <div><BenefitsCard Icon={"Pap"} Heading="10 Million+ " SubHeading="Tests, sample papers & notes"/></div>
        <div><BenefitsCard Icon={"Brin"} Heading="24 x 7" SubHeading="Doubt solving sessions"/></div>
        <div><BenefitsCard Icon={"Tick"} Heading="100 +" SubHeading="Offline centres"/></div>
    </div>
}