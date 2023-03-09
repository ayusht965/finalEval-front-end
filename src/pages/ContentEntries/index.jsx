import React from 'react';
import Header from '../../components/Header';
import Collections from '../../components/Collections';
import ContentEntriesContainer from '../../components/ContentEntriesContainer';
import './ContentEntries.css';

export default function ContentEntries() {
    return (
        <div>
            <Header />
            <div className='body-container'>
                <Collections />
                <ContentEntriesContainer />
            </div>
        </div>
    );
}