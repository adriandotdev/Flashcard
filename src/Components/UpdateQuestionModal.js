import React, {useEffect, useState, useRef} from 'react'
import Button from './Button'
import {gsap} from 'gsap'

function UpdateQuestionModal({dispatch, questionToBeUpdated, answerToBeUpdated}) {

    const divRef = useRef()

    useEffect(() => {

        gsap.to(divRef.current, {opacity: 1, marginTop: '0px'})
    })

    const [question, setQuestion] = useState(questionToBeUpdated)
    const [answer, setAnswer] = useState(answerToBeUpdated)

    return (
        // opacity-0 -mt-10
        <div ref={divRef} className="bg-blue-200 opacity-0 -mt-10 sm:w-32 md:w-72 flex flex-col gap-3 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-4 px-2 border border-blue-500 shadow-xl z-10 w-3/4 md:max-w-md">
            <div className="flex flex-col items-stretch">
                <label className="font-medium" htmlFor="updated-question">
                    Updated Question:
                </label>
                <input value={question} onChange={(e) => setQuestion(e.target.value)} className="border border-black py-2 px-1" type="text" name="updated-question" id="updated-question"/>
            </div>
            <div className="flex flex-col items-stretch">
                <label className="font-medium" htmlFor="updated-answer">
                    Updated Answer:
                </label>
                <input value={answer} onChange={(e) => setAnswer(e.target.value)} className="border border-black py-2 px-1" type="text" name="updated-answer" id="updated-answer" />
            </div>
            <div className="flex justify-end">

                <Button 
                handler={() => {

                    if (question && answer) {
                        dispatch({type: 'SHOW_MESSAGE_MODAL', payload: {isMessageModalOpen: true, modalContent: 'Question updated successfully!', isMessageError: false}})
                        dispatch({type: 'UPDATE_QUESTION', payload: {question: question, answer: answer}})
                    }
                    else 
                        dispatch({type: 'SHOW_MESSAGE_MODAL', payload: {isMessageModalOpen: true, modalContent: 'Question and answer must not be empty.', isMessageError: true}})
                }}
                className="bg-blue-300 font-bold py-2 px-2 hover:bg-blue-400 shadow w-30 mx-1"  
                text="Update" />

                <Button 
                handler={() => {
                    dispatch({type: 'SHOW_UPDATE_QUESTION_MODAL', payload: false})
                }}
                className="bg-red-300 font-bold py-2 px-3 hover:bg-red-400 shadow" 
                text="Cancel" />
            </div>
        </div>
    )
}

export default UpdateQuestionModal
