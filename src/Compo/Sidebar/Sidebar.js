import React from 'react';
import './sidebar.css';
import logo from '../../Assets/logo/lab_logo.png'
import { NavLink, } from 'react-router-dom';
import { RouteItem } from '../../Routes';

const Sidebar = ({ isOpen }) => {

    const navstyle = ({isActive}) => {
        return {
            backgroundColor: isActive ? 'red' : '',
        }
    }
    const active = "bg-blue-100 text-black"

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <header className='d-flex flex-column justify-cotent-center align-items-center p-5 pb-0 pt-4 logo-head'>
                <img src={logo} alt='logo' className='logo-img' />
                <h2 className='logo-name'>LabEase</h2>
            </header>
            <hr />
            {/* <h2>Sidebar</h2> */}
            {RouteItem.map((RouteItem) => (
                <NavLink to={RouteItem.path} key={RouteItem.id} className='d-flex p-2 pb-1 pt-1 sidebar-link'>
                    <div className='p-2  d-flex align-items-center links' ActiveClassName={active} >
                        <div className='icon'>{RouteItem.icon}</div>
                        <div className='name'>{RouteItem.name}</div>
                    </div>
                </NavLink>
            ))}
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );
};

export default Sidebar;
