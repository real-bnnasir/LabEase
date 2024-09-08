import React, { useState } from 'react';
import './sidebar.css';
import logo from '../../Assets/logo/lab_logo.png'
import { NavLink, } from 'react-router-dom';
import { RouteItem } from '../../Routes';

const Sidebar = ({ isOpen }) => {

    // const navstyle = ({ isActive }) => {
    //     return {
    //         backgroundColor: isActive ? 'red' : '',
    //     }
    // }
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <header className='d-flex flex-column justify-cotent-center align-items-center p-5 pb-0 pt-4 logo-head'>
                <img src={logo} alt='logo' className='logo-img' />
                <h2 className='logo-name'>LabEase</h2>
            </header>
            <hr />
            {/* <h2>Sidebar</h2> */}
            {RouteItem.map((item) => (
                <div key={item.id}>
                    {item.name === 'Management' ? (
                        <div>
                            <div
                                className='d-flex p-2 pb-1 pt-1 sidebar-link'
                                onClick={handleToggleDropdown}
                            >
                                <div className='p-2 d-flex align-items-center links'>
                                    <div className='icon'>{item.icon}</div>
                                    <div className='name'>{item.name}</div>
                                </div>
                            </div>
                            {dropdownVisible && (
                                <div className='dropdown'>
                                    {item.child.map((subItem) => (
                                        <NavLink
                                            to={subItem.path}
                                            key={subItem.id}
                                            className='dropdown-item d-flex p-2 pb-1 pt-1 sidebar-link'
                                            activeClassName='active'
                                        >
                                            <div className='p-2 d-flex align-items-center links'>
                                                <div className='name'>{subItem.name}</div>
                                            </div>
                                        </NavLink>
                                    ))}
                                    
                                </div>
                            )}
                        </div>
                    ) : (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className='d-flex p-2 pb-1 pt-1 sidebar-link'
                            activeClassName='active'
                        >
                            <div className='p-2 d-flex align-items-center links'>
                                <div className='icon'>{item.icon}</div>
                                <div className='name'>{item.name}</div>
                            </div>
                        </NavLink>
                    )}
                </div>
            ))}
            {/* <div className='logout-btn-container'>
                <button className='logout-btn'>Log Out</button>
            </div> */}
        </div>
    );
};

export default Sidebar;
