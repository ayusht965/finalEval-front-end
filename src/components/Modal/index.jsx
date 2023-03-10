import React from 'react';
import { ADD_CONTENT, UPDATE_CONTENT_NAME, ADD_NEW_FIELD } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './Modal.css';

export default function Modal(props) {
    const [name, setName] = React.useState('');
    if (!props.show) {
        return null;
    }

    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handleClick = () => {
        // console.log(props.showFieldEditModal);
        // if (props.showFieldEditModal) {
        //     const editField = async () => {
        //         const response = await makeRequest(UPDATE_FIELD(contentId), {}, {
        //             data: {
        //                 old: old,
        //                 new: name,
        //             }
        //         });
        //         editField();
        //         props.onClose();
        //         window.location.reload();
        //         return;
        //     };
        // }
         if (props.id) {
            const updateContentName = async () => {
                const res = await makeRequest(UPDATE_CONTENT_NAME(props.id), {}, { data: { name: name } });
            };
            updateContentName();
            props.onClose();
            window.location.reload();
        }
        if (!props.id) {
            const addContent = async () => {
                const res = await makeRequest(ADD_CONTENT, {}, { data: { name: name } });

            };
            addContent();
            props.onClose();
            window.location.reload();
        }
    };
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>Create a new content type</span>
                </div>
                <div className='modal-body'>
                    <span>Name of the content type</span>
                    <input onChange={handleChange} type="text" />
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='modal-close-button'>Close</button>
                    <button onClick={handleClick} className='modal-create-button'>Create</button>
                </div>
            </div>
        </div>
    );
}