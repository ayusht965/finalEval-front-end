import React from 'react';
import { ADD_CONTENT_ENTRY, ADD_NEW_FIELD } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './NewEntryModal.css';

export default function NewEntryModal(props) {
    const [entry, setEntry] = React.useState([]);
    if (!props.entries) return null;
    const filteredEntries = Object.keys(props.entries.Fields).filter((key) => key !== 'undefined');
    if (!props.show) {
        return null;
    }

    const handleAddEntry = async () => {
        await makeRequest(ADD_CONTENT_ENTRY(props.id), {}, { data: { newEntry: entry } }).then((res) => {
            console.log(res);
        });
        props.onClose();
        // window.location.reload();
    };
    return filteredEntries ? (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <span className='modal-title'>Create a new content field</span>
                </div>
                {
                    filteredEntries.map((key, index) => {
                        return (
                            <div key={index} className='modal-body'>
                                <span>{key}</span>
                                <input onChange={(e) => { setEntry({ ...entry, [key]: e.target.value }); }} type="text" />
                            </div>
                        );
                    })
                }
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='modal-close-button'>Close</button>
                    <button onClick={handleAddEntry} className='modal-create-button'>Add</button>
                </div>
            </div>
        </div>
    ) : (
        <div>loding...</div>
    );
}