import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/icon-search-dark@3x.png';
import './Collections.css';
export default function Collections({ allContents }) {
    const [id, setId] = useState();
    const navigate = useNavigate();
    const redirectToHome = () => {
        navigate('/home');
    };
    const handleNavigate = (id) => {
        setId(id);
        navigate(`/content-entries/${id}`);
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
                        {
                            allContents.map((content, index) => {
                                return (
                                    <li key={index} onClick={() => handleNavigate(content.id)}>{content.Name}</li>
                                );
                            })
                        }
                        {/* <li onClick={navigateToEntries}>Company_profile</li> */}
                        {/* <li onClick={navigateToEntries}>Blog</li>
                        <li onClick={navigateToEntries}>Product</li>
                        <li onClick={navigateToEntries}>Product</li>
                        <li onClick={navigateToEntries}>Product</li> */}
                    </ul>
                </div>
                <div onClick={redirectToHome} className='builder-container'  >
                    <span>CONTENT TYPE BUILDER</span>
                </div>
            </div>
        </div>
    );
}