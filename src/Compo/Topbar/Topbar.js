import React, { useEffect, useState } from 'react';
import './topbar.css';
import { FaSearch, FaBell } from 'react-icons/fa'; 
import { FaBars } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Topbar = ({ onToggleSidebar, isOpen }) => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1) { 
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`topbar ${isOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
            <div className='d-flex justify-content-center align-items-center' style={{alignItems:'center',justifyContent:'center'}}>
                <button className="toggler" onClick={onToggleSidebar}>
                    <FaBars className='bar' />
                </button>
                <h1 style={{ fontSize: '20px', padding: '0', margin: '0' }} className='h1'>
                    Welcome back,
                    <span style={{ fontSize: '13px' }}>Name Here</span>
                </h1>
            </div>
            <div className='d-flex  icons'>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <FaSearch className="search-icon" />
                </div>
                <div className="notification">
                    <FaBell className="bell-icon" />
                    <span className="badge">3</span> 
                </div>
                <div className='profile'>
                    <CgProfile className='avatar'/>
                </div>
            </div>
        </div>
    );
};

export default Topbar;



