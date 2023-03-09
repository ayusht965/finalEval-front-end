import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/icon-search-dark@3x.png';
import './Collections.css';
export default function Collections() {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/');
    };
    const navigateToEntries = () => {
        navigate('/content-entries');
    };
    return (
        <div className='collection-container'>
            <div>
                <div className='collection-title'>
                    COLLECTION TYPES
                    <img src={searchIcon} alt="logo" />
                </div>
                <div className='collection-list'>
                    <ul>
                        <li onClick={navigateToEntries}>Company_profile</li>
                        <li onClick={navigateToEntries}>Blog</li>
                        <li onClick={navigateToEntries}>Product</li>
                        <li onClick={navigateToEntries}>Product</li>
                        <li onClick={navigateToEntries}>Product</li>
                    </ul>
                </div>
                <div onClick={redirect} className='builder-container'  >
                    <span>CONTENT TYPE BUILDER</span>
                </div>
            </div>
        </div>
    );
}