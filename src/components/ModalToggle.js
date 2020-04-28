import React, {useState} from 'react'
import Modal from 'react-modal'

function ModalToggle() {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    return (
        <div>
          <h1>Modal Toggle</h1>
        <button onClick = {() => setmodalIsOpen(true)}><h2>Open Modal</h2></button>
       <Modal isOpen = {modalIsOpen} ariaHideApp={false} onRequestClose={() => setmodalIsOpen(false)} style = {{overlay:{backgroundColor:'grey'},content:{color:'orange'}}}>
         <h2>Modal Title!</h2>
         <p>Modal Body!</p>
         <div>
           <button onClick = {() => setmodalIsOpen(false)}>Close</button>
         </div>
       </Modal>
      </div>
    )
}

export default ModalToggle
