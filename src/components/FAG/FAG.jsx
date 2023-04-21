import React from 'react'
import Collapse from 'src/subComponents/Collapse'

const FAG = ({ questions }) => {
    return (
        <div className='container'>
            {(questions || []).map((question) => {
                return <Collapse  key={question.id} content={question}/>
            })}
        </div>
    )
}

export default FAG

