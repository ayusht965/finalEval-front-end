import React from 'react';
import Header from '../../components/Header';
import './NotFoundPage.css';
export default function NotFoundPage({ entries }) {
    return (
        <div>
            <Header />
            <div className='error-message'>
                Error(404): Page Not Found
            </div>
        </div>
    );
}