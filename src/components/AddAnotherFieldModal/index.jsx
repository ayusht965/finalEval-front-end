import React from 'react';
import { ADD_NEW_FIELD } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './AddAnotherFieldModal.css';

export default function AddAnotherFieldModal(props) {
    const [name, setName] = React.useState('');
    if (!props.show) {
        return null;
    }

    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handleClick = () => {
        makeRequest(ADD_NEW_FIELD(props.id), {}, { data: { newField: name } }).then((res) => {
            props.onClose();
        }
        );
        window.location.reload();
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



