import React from 'react';
import Collections from '../../components/Collections';
import ContentEditContainer from '../../components/ContentEditContainer';
import ContentTypeList from '../../components/ContentTypeList';
import Header from '../../components/Header';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div>
            <Header />
            <div className='body-container'>
                <Collections />
                <ContentTypeList />
                <ContentEditContainer />
            </div>

        </div>
    );
}