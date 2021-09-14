import React from 'react'

function MessageModal({modalContent, isMessageError, dispatch}) {

    setTimeout(() => {
    
        dispatch({type: 'HIDE_MESSAGE_MODAL', payload: {isMessageModalOpen: false, modalContent: '', isMessageError: false}})
    }, 3000)
    
    return (
        <div className= {isMessageError ? "bg-red-400 w-48 text-center fixed bottom-6 left-2 py-3 shadow-lg" : "bg-green-400 w-48 text-center fixed bottom-6 left-2 py-3 shadow-lg"}>
            <h1 className="text-center font-semibold">{modalContent}</h1>
        </div>
    )
}

export default MessageModal
