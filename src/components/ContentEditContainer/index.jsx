import React from 'react';
import pencilIcon from '../../assets/user-pencil-write-ui-education@3x.png';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import binIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';
import Modal from '../Modal';
import './ContentEditContainer.css';
export default function ContentEditContainer() {

    const [showModal, setShowModal] = React.useState(false);
    return (
        <div>
            <div className='content-edit-container'>
                <div className='content-edit-tile'>
                    <span>Company Profile</span>
                    <img className='icon' src={pencilIcon} alt="logo" />
                </div>
                <span className='field-count'>13 Fields</span>
                <div className='fields-container'>
                    <div onClick={() => setShowModal(true)} className='add-field-container'>
                        <span>Add anoter field</span>
                    </div>
                    <Modal onClose={() => setShowModal(false)} show={showModal} />
                    <div className='content-fields-container'>
                        <div className='field-initials'> AB</div>
                        <span>Text</span>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                    <div className='content-fields-container'>
                        <div className='field-initials'> AB</div>
                        <span>Text</span>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
                    <div className='content-fields-container'>
                        <div className='field-initials'> AB</div>
                        <span>Text</span>
                        <div>
                            <img className='icon' src={editIcon} alt="" />
                            <img className='icon' src={binIcon} alt="" />
                        </div>
                    </div>
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
        </div>
    );
}