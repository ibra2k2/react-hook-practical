import React from 'react'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



const CustomToast = ({closeToast})=>{
    return (
      <div>
      Somethings went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
    );
    
  }
toast.configure();

function ToastNotify() {
    const notify = () => {
        toast('Basic Notification!', { position: toast.POSITION.TOP_LEFT});
        toast.success('Success Notification!', { position: toast.POSITION.TOP_RIGHT, autoClose: 8000 });
        toast.info('Info Notification!', { position: toast.POSITION.BOTTOM_LEFT, autoClose: false});
        toast.warn(<CustomToast />, { position: toast.POSITION.BOTTOM_RIGHT});
        toast.error('Error Notification!', { position: toast.POSITION.TOP_CENTER});
        toast('Normal Notification!', { position: toast.POSITION.BOTTOM_CENTER});
      }
    return (
        <div className='App'>
          <h1>Click Notification</h1>
          <button onClick={notify}><h2>Notify Here</h2></button>  
        </div>
    )
}

export default ToastNotify
