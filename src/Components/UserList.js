import React from 'react';
import Card from './Card';

const UsersList = (props) => {
    return (
        <ol>
            {props.users.map((user) => (
                <li key={user.id}>
                    <Card >
                        {user.name} ({user.age} years old)
                    </Card>
                </li>
            ))}
        </ol>
    );
};

export default UsersList;