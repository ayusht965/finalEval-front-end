import React from 'react';
import editIcon from '../../assets/user-edit-text-message-note@3x.png';
import binIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';
import { DELETE_CONTENT_ENTRY } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

import './ContentEntriesContainer.css';
import NewEntryModal from '../NewEntryModal';

export default function ContentEntriesContainer({ entries, contentEntries }) {
    console.log(contentEntries);
    const filteredEntries = Object.keys(entries.Fields).filter((key) => key !== 'undefined');
    const [showModal, setShowModal] = React.useState(false);
    const handleDelete = async (id) => {
        const response = await makeRequest(DELETE_CONTENT_ENTRY(id), {}, {
        });
    };

    return entries && filteredEntries && contentEntries ? (
        <div>
            <div className='content-entry-container'>
                <div className='content-entrie-title'>
                    <span className='entrie-count'>{contentEntries.length} Entries Found</span>
                    <div onClick={() => setShowModal(true)} className='new-entry-div'>
                        <span className='new-entry-text'>Add a new entry</span>
                    </div>
                    <NewEntryModal entries={entries} id={entries.id} onClose={() => setShowModal(false)} show={showModal} />
                </div>
                <div className='table-content-title'>
                    <div className='content-entries-fields'>
                        {
                            filteredEntries ? filteredEntries.map((key, index) => {
                                return (
                                    <span key={index}>{key}</span>
                                );
                            }) : null
                        }
                    </div>
                    <span className='actions'>Actions</span>
                </div>
                <div className='content-entries'>

                    {
                        contentEntries ? contentEntries.map((entry, index) => {
                            return (

                                <div key={index} className='content-fields-container'>
                                    <div className='content-entries-fields' style={{ marginLeft: '10px' }}>
                                        {
                                            Object.values(entry.Fields).map((value, index) => {
                                                return (
                                                    <span key={index}>{value}</span>
                                                );
                                            })
                                        }
                                    </div>
                                    <div>
                                        <img className='icon' src={editIcon} alt="" />
                                        <img className='icon' onClick={() => {
                                            handleDelete(entry.id
                                            );
                                        }} src={binIcon} alt="" />
                                    </div>
                                </div>

                            );
                        }) : null
                    }
                </div>
            </div>
        </div>
    ) : (<div>Loading...</div>);
}