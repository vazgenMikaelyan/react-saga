import React, { useReducer } from 'react';


import './UsersTableComponent.css' 

const UsersTableComponent = (props) => {


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>
                                <div className="avater">
                                    <img src={user._links.avatar.href} />
                                </div>
                                {`${user.first_name}  ${user.last_name}`}
                            </td>
                            <td>{user.phone}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                            <td><button >Dekete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

export default UsersTableComponent;