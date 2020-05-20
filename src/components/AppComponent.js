import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NavBarComponent from './NavBar';
import SearchComponent from './Search';
import UsersTableComponent from './UsersTable';

import {getUserLIstAction} from '../store/actions'

import './AppComponent.css';

const AppComponent = (props) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    // useEffect(() => {
    //   dispatch(getUserLIstAction())
    //    console.log(users) 
    // }, []);
    return (
        <React.Fragment>
            <NavBarComponent />
            <div className="content">
                <SearchComponent />
                <div className="container">
                    <UsersTableComponent users={users}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AppComponent;

