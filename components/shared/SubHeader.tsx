import React from 'react'

type SubHeaderProps = {
    text: string
}

const SubHeader: React.FC<SubHeaderProps> = ({text}) => {
    return (
        <span className="font-bold text-xl mb-6">{text}</span>
    )
}

export default SubHeader