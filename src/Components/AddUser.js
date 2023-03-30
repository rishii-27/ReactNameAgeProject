import React, { useState } from "react";
import Cards from "./Card";
import Buttons from "./Button";
import Modal from './Modal'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        // console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <Modal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Cards className='card card-body'>
                <form className="card p-3 m-3 bg-light" onSubmit={addUserHandler}>
                    <label className="form-label" htmlFor="username">Username</label>
                    <input className="form-control" id="username" onChange={usernameChangeHandler} type="text" value={enteredUsername} required />
                    <label className="form-label" htmlFor="age">Age(year)</label>
                    <input className="form-control mb-3" id="age" type="number" onChange={ageChangeHandler} value={enteredAge}  />
                    <Buttons type='submit'>Add User</Buttons>
                </form>
            </Cards>
        </div>
    )
}

export default AddUser;