import React from 'react'
import { useFormik } from 'formik'


const validate = (values) => {
    const errors = {};
    if(!values.firstName){
        errors.firstName ='Required Field';
    }else if(values.firstName.length > 15){
        errors.firstName = 'Must be 15 character or less';
    }
    if(!values.lastName){
        errors.lastName = 'Required Field';
    }else if(values.lastName.length > 20){
        errors.lastName = 'Must be 20 character or less';
    }
    if (!values.email){
        errors.email = 'Required Field';
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
    }
    if(!values.channel){
        errors.channel = 'Required Field';
    }else if(values.channel.length > 10){
        errors.channel = 'Must be 10 character or less';
    }
    return errors;
};

function FormFormik() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            channel: ''
        },
        validate,
        onSubmit: (values) => {
            // console.log('Forma data', values);
            alert(JSON.stringify(values, null, 2));
        }
    })

    // console.log('Form values',formik.values)
    return (
        <div>
            <h1>Formik Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' 
                    id='firstName' 
                    name='firstName' 
                    placeholder='Your First Name'
                    onChange={formik.handleChange} 
                    onBlur = {formik.handleBlur} 
                    value={formik.values.firstName}/>
                    {formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' 
                    id='lastName' 
                    name='lastName' 
                    placeholder='Your Last Name'
                    onChange={formik.handleChange} 
                    onBlur = {formik.handleBlur} 
                    value={formik.values.lastName}/>
                    {formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' 
                    id='email' 
                    name='email' 
                    placeholder='Your Email Address'
                    onChange={formik.handleChange} 
                    onBlur = {formik.handleBlur} 
                    value={formik.values.email}/>
                    {formik.errors.email ?<div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input type='text' 
                    id='channel' 
                    name='channel' 
                    placeholder='Your Channel'
                    onChange={formik.handleChange} 
                    onBlur = {formik.handleBlur} 
                    value={formik.values.channel}/>
                    {formik.errors.channel ?<div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormFormik
