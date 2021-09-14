import React, {useState, useEffect, useRef} from 'react'
import Textfield from '../InputComponents/Textfield'
import Button from './Button'
import MessageModal from './MessageModal'
import { gsap } from "gsap"

function AddFlashcardModal({categoryLength, descriptionLength, isModalOpen, showModal}) {

   const [category, setCategory] = useState('')
   const [description, setDescription] = useState('')
   const divRef = useRef()

    useEffect(() => {
        
        if (!isModalOpen) {
            setCategory('')
            setDescription('')
        }
    }, [isModalOpen])

    useEffect(() => {
        gsap.to(divRef.current, {opacity: 1, marginTop: "0px", duration: .3})  
    })

    useEffect(() => {

        showModal({type: 'CHANGE_CATEGORY_VALUE', payload: category})
    }, [category])

    useEffect(() => {
        showModal({type: 'CHANGE_DESCRIPTION_VALUE', payload: description})
    }, [description])
    
    return (
        <div className="">
            <div ref={divRef} className="fixed opacity-1 -mt-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 px-3 py-2 border-2 border-green-500 flex flex-col gap-4 sm:w-96 drop-shadow-lg shadow-lg">

                {/* TEXTFIELD AREA */}
                <section className="flex flex-col">

                    <section className="flex items-center justify-between">
                        <label className="font-medium" htmlFor="question">Category Name: </label>

                        <small>{categoryLength}/25</small>
                    </section>

                    <input value={category}  onInput={(e) => {

                        25 - e.target.value.length === -1 ? setCategory(prevValue => prevValue) : setCategory(e.target.value)
                        
                    }} className="border border-black py-2 px-1" type="text" name="" id="" />
                </section>

                {/* TEXT AREA */}
                <section className="flex flex-col">

                    <section className="flex items-center justify-between">
                        <label className="font-medium" htmlFor="answer">Short Description: </label>

                        <small>{descriptionLength}/45</small>
                    </section>
                    <textarea value={description} onInput={(e) => {

                        45 - e.target.value.length === -1 ? setDescription(prevValue => prevValue) : setDescription(e.target.value)

                    }} className="border border-black py-2 px-1" name="" id="" cols="30" rows="3"></textarea>
                </section>
                
                {/* BUTTON SECTION */}
                <section className="flex gap-2">
                    <Button handler={() => {

                        if (category) {
                            showModal({type: 'ADD_CATEGORY', payload: {category: category, description: description, questions: {}}})
                            showModal({type: 'SHOW_MESSAGE_MODAL', payload: {isMessageModalOpen: true, modalContent: 'Category Added', isMessageError: false}})
                        }
                        else 
                            showModal({type: 'SHOW_MESSAGE_MODAL', payload: {isMessageModalOpen: true, modalContent: 'Input field empty', isMessageError: true}})
                    }}
                    
                    className="bg-green-300 font-bold py-2 px-3 hover:bg-green-400 shadow" text="Add"/>

                    <Button handler={() => showModal({type: "CLOSE_MODAL"})}

                    className="bg-red-300 font-bold py-2 px-3 hover:bg-red-400 shadow"
                    
                    text="Cancel"/>
                </section>
            </div>
        </div>
    )
}

export default AddFlashcardModal
