import React from 'react'
import Collapse from 'src/subComponents/Collapse'

const FAG = ({ questions }) => {
    return (
        <div className='container'>
            {(questions || []).map((question, index) => {
                return <Collapse key={question.id} content={question} isOpen={index === 0} />
            })}
        </div>
    )
}

export default FAG

