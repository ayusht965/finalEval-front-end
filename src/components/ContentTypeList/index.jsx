import React from 'react';
import './ContentTypeList.css';
import searchIcon from '../../assets/icon-search-dark@3x.png';
import Modal from '../Modal';


export default function ContentTypeList({ allContents, handler }) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className='content-type-list-container'>
            <div className='content-title'>
                {allContents.length} Content Types
                <img src={searchIcon} alt="logo" />
            </div>
            <div onClick={() => setShowModal(true)} className='new-type-container'>
                <span>+ New Type</span>
            </div>
            <Modal onClose={() => setShowModal(false)} show={showModal} />
            {
                allContents.map((content, index) => {
                    return (
                        <div onClick={() => handler(content)} key={index} className='type-container'>
                            <span>{content.Name}</span>
                            <span>{Object.keys(content.Fields).length}</span>
                        </div>
                    );
                })
            }
        </div>
    );
}