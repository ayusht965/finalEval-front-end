import React from 'react';
import pencilIcon from '../../assets/user-pencil-write-ui-education@3x.png';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import binIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';
import Modal from '../Modal';
import './ContentEditContainer.css';
import NewEntryModal from '../NewEntryModal';
import AddAnotherFieldModal from '../AddAnotherFieldModal';
export default function ContentEditContainer({ content }) {
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    
    return content ? (
        <div>
            <div className='content-edit-container'>
                <div className='content-edit-tile'>
                    <span>{content.Name}</span>
                    <img onClick={() => setShowEditModal(true)} className='icon' src={pencilIcon} alt="logo" />
                    <Modal placeHolder={'Update content Name'} onClose={() => setShowEditModal(false)} id={content.id} show={showEditModal} />
                </div>
                <span className='field-count'>{Object.keys(content.Fields).length} Fields</span>
                <div className='fields-container'>
                    <div onClick={() => setShowModal(true)} className='add-field-container'>
                        <span>Add another field</span>
                    </div>
                    <AddAnotherFieldModal id={content.id} placeHolder={'Add another field'} onClose={() => setShowModal(false)} show={showModal} />
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
            {/* <div className='content-edit-tile'>
                <span>Content Type</span>
                <img className='icon' src={pencilIcon} alt="logo" />
            </div> */}
            {/* <span className='field-count'>0 Fields</span> */}
            {/* <div className='fields-container'> */}
            {/* <div onClick={() => setShowModal(true)} className='add-field-container'>
                    <span>Add another field</span>
                </div> */}
            {/* <AddAnotherFieldsModal onClose={() => setShowModal(false)} show={showModal} /> */}

            {/* <div className='content-fields-container'>
                    <div className='field-initials'> AB</div>
                    <span>Text</span>
                    <div>
                        <img className='icon' src={editIcon} alt="" />
                        <img className='icon' src={binIcon} alt="" />
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    </div>);
}