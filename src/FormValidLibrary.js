
import React from 'react';
import './Form.css'
import { useForm } from 'react-hook-form';

const FormValidLibrary = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)} >
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic1">
                    <input
                        id="firstname"
                        className="input"
                        type="text"
                        name="firstName"
                        defaultValue="" {...register("firstName", { required: true, maxLength: 10 })}
                        placeholder=" "
                        autoComplete='off'
                    />
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder">First name</label>
                    <label className='errorMsg'>{errors.firstName?.type === 'required' && "First name is required"}</label>
                    <label className='errorMsg'>{errors.firstName?.type === 'maxLength' && "First name max-length 10 "}</label>
                </div>
                <div className="input-container ic2">
                    <input
                        id="lastname"
                        className="input"
                        type="text"
                        name="lastName"
                        defaultValue="" {...register("lastName", { required: true, maxLength: 10 })}
                        placeholder=" "
                        autoComplete='off'
                    />
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">Last name</label>
                    <label className='errorMsg'>{errors.lastName?.type === 'required' && "Last name is required"}</label>
                    <label className='errorMsg'>{errors.lastName?.type === 'maxLength' && "Last name max-length 10 "}</label>
                </div>
                <div className="input-container ic2">
                    <input
                        id="email"
                        className="input"
                        type="text"
                        name="email"
                        defaultValue="" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                        placeholder=" "
                        autoComplete='off'
                    />
                    <div className="cut cut-short"></div>
                    <label htmlFor="email" className="placeholder">Email</label>
                    <label className='errorMsg'>{errors.email?.type === 'required' && "Email is required"}</label>
                    <label className='errorMsg'>{errors.email?.type === 'pattern' && "Email is not valid"}</label>
                </div>
                <button type="submit" className="submit">submit</button>
            </form>
        </>
    )
}
export default FormValidLibrary;