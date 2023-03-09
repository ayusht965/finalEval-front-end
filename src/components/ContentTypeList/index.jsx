import React from 'react';
import './ContentTypeList.css';
import searchIcon from '../../assets/icon-search-dark@3x.png';
import Modal from '../Modal';


export default function ContentTypeList() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className='content-type-list-container'>
            <div className='content-title'>
                7 TYPES
                <img src={searchIcon} alt="logo" />
            </div>
            <div onClick={() => setShowModal(true)} className='new-type-container'>
                <span>+ New Type</span>
            </div>
            <Modal onClose={() => setShowModal(false)} show={showModal} />
            <div className='type-container'>
                <span>Company_Profile</span>
                <span>13</span>
            </div>
            <div className='type-container'>
                <span>Type 3</span>
                <span>13</span>
            </div>
            <div className='type-container'>
                <span>Type 2</span>
                <span>13</span>
            </div>
            <div className='type-container'>
                <span>Type 3</span>
                <span>13</span>
            </div>
        </div>
    );
}