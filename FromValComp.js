import React, { useState } from 'react';

const FromValComp = () => {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        term: false
    });

    const [errors, setErrors] = useState({});

    const inputChangeHandler = (event) => {
        const { type, name, value, checked } = event.target;
        setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
    };

    const validate = () => {
        let formErrors = {};
        if (!user.fname) formErrors.fname = "First name is required";
        if (!user.lname) formErrors.lname = "Last name is required";
        if (!user.email) formErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(user.email)) formErrors.email = "Email address is invalid";
        if (!user.password) formErrors.password = "Password is required";
        if (!user.term) formErrors.term = "You must accept the terms and conditions";
        return formErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form data:', user);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div>
            <h3>Hey, it's my form</h3>
            <form onSubmit={handleSubmit}>
                <label>Enter First Name</label>
                <input 
                    type='text' 
                    name='fname' 
                    onChange={inputChangeHandler} 
                    value={user.fname}
                />
                {errors.fname && <p>{errors.fname}</p>}
                <br />

                <label>Enter Last Name</label>
                <input 
                    type='text' 
                    name='lname' 
                    onChange={inputChangeHandler} 
                    value={user.lname}
                />
                {errors.lname && <p>{errors.lname}</p>}
                <br />

                <label>Enter your email</label>
                <input 
                    type='text' 
                    name='email' 
                    onChange={inputChangeHandler} 
                    value={user.email}
                />
                {errors.email && <p>{errors.email}</p>}
                <br />

                <label>Enter your password</label>
                <input 
                    type='password' 
                    name='password' 
                    onChange={inputChangeHandler} 
                    value={user.password}
                />
                {errors.password && <p>{errors.password}</p>}
                <br />

                <label>
                    <input 
                        type='checkbox' 
                        name='term' 
                        onChange={inputChangeHandler} 
                        checked={user.term}
                    />
                    Accept Terms and Conditions
                </label>
                {errors.term && <p>{errors.term}</p>}
                <br />

                <button type='submit' className='btn btn-primarynp'>Submit</button>
            </form>
        </div>
    );
};

export default FromValComp;
