interface BatchDetailsCardProps{
    title: string
    forClasses: string
}

const BatchDetailsCard = ({title, forClasses}: BatchDetailsCardProps) => {
    return <div>
        <div className="border solid m-2">
            <div><span>{title}</span></div>
            <div><span>{forClasses}</span></div>
            <span>Explore Category :- </span>
        </div>                
    </div>
}

export const BatchDetails = () => {
    return <div>
        <BatchDetailsCard title="Neet " forClasses="class 11,12 & Droppers"/>
        <BatchDetailsCard title="IIT JEE " forClasses="class 11,12 & Droppers"/>
    </div>
}