import React from 'react';

// import Card from './Card';
import Button from './Button';
import Alert from 'react-bootstrap/Alert';


const ErrorModal = (props) => {
    return (
        <div>
            <Alert>
                <header >
                    <h2>{props.title}</h2>
                </header>
                <div >
                    <p>{props.message}</p>
                </div>
                <footer>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Alert>
        </div>
    );
};

export default ErrorModal;
