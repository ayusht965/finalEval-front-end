import React from 'react';
import pencilIcon from '../../assets/user-pencil-write-ui-education@3x.png';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import binIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';
import Modal from '../Modal';
import { DELETE_FIELD } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './ContentEditContainer.css';
import AddAnotherFieldModal from '../AddAnotherFieldModal';
export default function ContentEditContainer({ content }) {
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [showFieldEditModal, setShowFieldEditModal] = React.useState(false);

    const handleDelete = async (field) => {
        console.log(field);
        const response = await makeRequest(DELETE_FIELD(content.id), {}, {
            data: {
                'delField': field
            }
        });
        windows.location.reload();
    };
    return content ? (
        <div>
            <div className='content-edit-container'>
                <div className='content-edit-tile'>
                    <span>{content.Name}</span>
                    <img onClick={() => setShowEditModal(true)} className='icon' src={pencilIcon} alt="pencilIcon" />
                    <Modal onClose={() => setShowEditModal(false)} id={content.id} show={showEditModal} />
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
                                        <img className='icon' src={editIcon} alt="editIcon" />
                                        {/* <Modal onClose={() => setShowFieldEditModal(false)} id={content.id} showFieldEditModal={showFieldEditModal} show={showFieldEditModal} /> */}
                                        <img onClick={() => handleDelete(field)} className='icon' src={binIcon} alt="" />
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
        </div>
    </div>);
}