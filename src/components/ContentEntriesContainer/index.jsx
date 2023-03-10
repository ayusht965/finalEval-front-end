import React from 'react';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import binIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';
import './ContentEntriesContainer.css';
import NewEntryModal from '../NewEntryModal';

export default function ContentEntriesContainer({ entries }) {
    console.log(entries);
    const [showModal, setShowModal] = React.useState(false);
    return entries ? (
        <div>
            <div className='content-entry-container'>
                <div className='content-entrie-title'>
                    <span className='entrie-count'>13 Entries Found</span>
                    <div onClick={() => setShowModal(true)} className='new-entry-div'>
                        <span className='new-entry-text'>Add a new entry</span>
                    </div>
                    <NewEntryModal onClose={() => setShowModal(false)} show={showModal} />
                </div>
                <div className='table-content-title'>
                    <div className='content-entries-fields'>
                        {
                            entries ? Object.keys(entries.Fields).map((key, index) => {
                                return (
                                    <span key={index}>{key}</span>
                                );
                            }) : null
                        }
                        {/* <span>Id</span>
                        <span>Name</span>
                        <span>Website</span>
                        <span>Contact</span> */}
                    </div>
                    <span>Actions</span>
                </div>
                <div className='content-entries'>
                    <div className='content-fields-container'>
                        <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                    <div className='content-fields-container'>
                        <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                    <div className='content-fields-container'>
                        <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                    <div className='content-fields-container'>
                        <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                    <div className='content-fields-container'>
                        <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                            <span>1</span>
                            <span>John Doe</span>
                            <span>www.johndoe.com</span>
                            <span>Text</span>
                        </div>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ) : (<div>Loading...</div>);
}