import React from 'react';
import Header from '../../components/Header';
import Collections from '../../components/Collections';
import ContentEntriesContainer from '../../components/ContentEntriesContainer';
import './ContentEntries.css';
import { GET_ALL_CONTENTS } from '../../constants/apiEndPoints';
import { GET_CONTENT_BY_ID, GET_CONTENT_ENTRIES } from '../../constants/apiEndPoints';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import makeRequest from '../../utils/makeRequest';

export default function ContentEntries() {
    const location = useLocation();
    const [entries, setEntries] = useState();
    const [contentEntries, setContentEntries] = useState();
    const [allContents, setAllContents] = useState();
    const id = location.pathname.slice(-1);
    useEffect(() => {
        const getContentEntriesById = async () => {
            const res = await makeRequest(GET_CONTENT_ENTRIES(id), {});
            console.log(`jbwb${res}`);
            setContentEntries(res);
        };
        const getEntries = async () => {
            const res = await makeRequest(GET_CONTENT_BY_ID(id), {});
            setEntries(res);
        };
        const getAllContents = async () => {
            const response = await makeRequest(GET_ALL_CONTENTS, 'GET');
            setAllContents(response);
        };
        getContentEntriesById();
        getAllContents();
        getEntries();
    }, [id]);
    // console.log(contentEntries);
    return allContents && entries && contentEntries ? (
        <div>
            <Header entries={entries} />
            <div className='body-container'>
                <Collections allContents={allContents} />
                <ContentEntriesContainer entries={entries} contentEntries={contentEntries} />
            </div>
        </div>
    ) : (<div>Loading...</div>);
}