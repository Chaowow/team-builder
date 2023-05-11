import React from 'react';

const Form = (props) => {
    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Name &nbsp;
                <input 
                    placeholder='Enter name'
                    value={props.values.name}
                    id='nameInput'
                    name='name'
                    type='text'
                    onChange={handleChange}
                />
            </label>
            <label> Email &nbsp;
                <input 
                placeholder='Enter email'
                value={props.values.email}
                id='emailInput'
                name='email'
                type='text'
                onChange={handleChange}
                />
            </label>
            <label> Role &nbsp;
            <input 
                placeholder='Enter role'
                value={props.values.role}
                id='roleInput'
                name='role'
                type='text'
                onChange={handleChange}
                />
            </label>
            <input type='submit' value='Create your character' />
        </form>
    )
}

export default Form;