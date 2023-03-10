import React from 'react';
import './Header.css';
export default function Header({ entries }) {
    return entries ? (
        <div className='header'>
            <div className='header-title'>
                <span>CMS+</span>
            </div>
            <div className='content-type'>
                <span>{entries.Name}</span>
            </div>
        </div>
    ) : (
        <div className='header'>
            <div className='header-title'>
                <span>CMS+</span>
            </div>
            <div className='content-type'>
                <span>Content Types</span>
            </div>
        </div>
    );
}