import React from 'react';
import pencilIcon from '../../assets/user-pencil-write-ui-education@3x.png';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import binIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';
import Modal from '../Modal';
import './ContentEditContainer.css';
import NewEntryModal from '../NewEntryModal';
export default function ContentEditContainer({ content }) {
    const [showEditModal, setShowEditModal] = React.useState(false);
    console.log(content);
    const [showModal, setShowModal] = React.useState(false);
    return content ? (
        <div>
            <div className='content-edit-container'>
                <div className='content-edit-tile'>
                    <span>{content.Name}</span>
                    <img onClick={() => setShowEditModal(true)} className='icon' src={pencilIcon} alt="logo" />
                    <Modal onClose={() => setShowEditModal(false)} id={content.Id} showEditModal={setShowEditModal} showModal={setShowModal} show={showEditModal} />
                </div>
                <span className='field-count'>{Object.keys(content.Fields).length} Fields</span>
                <div className='fields-container'>
                    <div onClick={() => setShowModal(true)} className='add-field-container'>
                        <span>Add another field</span>
                    </div>
                    <NewEntryModal id={content.id} onClose={() => setShowModal(false)} show={showModal} />
                    {
                        Object.keys(content.Fields).map((field, index) => {
                            return (
                                <div key={index} className='content-fields-container'>
                                    <div className='field-initials'>AB</div>
                                    <span>{field}</span>
                                    <div>
                                        <img className='icon' src={editIcon} alt="" />
                                        <img className='icon' src={binIcon} alt="" />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    ) : (<div>
        <div className='content-edit-container'>
            <div className='content-edit-tile'>
                <span>Content Type</span>
                <img className='icon' src={pencilIcon} alt="logo" />
            </div>
            <span className='field-count'>0 Fields</span>
            <div className='fields-container'>
                <div onClick={() => setShowModal(true)} className='add-field-container'>
                    <span>Add another field</span>
                </div>
                <NewEntryModal onClose={() => setShowModal(false)} show={showModal} />

                <div className='content-fields-container'>
                    <div className='field-initials'> AB</div>
                    <span>Text</span>
                    <div>
                        <img className='icon' src={editIcon} alt="" />
                        <img className='icon' src={binIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>);
}