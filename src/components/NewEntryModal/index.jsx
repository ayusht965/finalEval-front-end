import React from 'react';
import { ADD_NEW_FIELD } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './NewEntryModal.css';

export default function NewEntryModal(props) {
    if (!props.entries) return null;
    const filteredEntries = Object.keys(props.entries.Fields).filter((key) => key !== 'undefined');
    if (!props.show) {
        return null;
    }
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handleClick = () => {
    };
    return filteredEntries ? (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>Create a new content field</span>
                </div>
                {
                    filteredEntries.map((entry, index) => {
                        return (
                            <div key={index} className='modal-body'>
                                <span>{entry}</span>
                                <input onChange={handleChange} type="text" />
                            </div>
                        );
                    })
                }
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='modal-close-button'>Close</button>
                    <button onClick={handleClick} className='modal-create-button'>Add</button>
                </div>
            </div>
        </div>
    ) : (
        <div>loding...</div>
    );
}