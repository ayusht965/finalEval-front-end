import React, { useEffect } from 'react';
import Collections from '../../components/Collections';
import ContentEditContainer from '../../components/ContentEditContainer';
import ContentTypeList from '../../components/ContentTypeList';
import Header from '../../components/Header';
import { GET_ALL_CONTENTS } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './LandingPage.css';

export default function LandingPage() {
    const [allContents, setAllContents] = React.useState([]);
    const [selectedContent, setSelectedContent] = React.useState();
    useEffect(() => {
        const getAllContents = async () => {
            const response = await makeRequest(GET_ALL_CONTENTS, 'GET');
            setAllContents(response);
        };
        getAllContents();
    }, []);
    const handler = (content) => {
        // console.log(content);
        setSelectedContent(content);
    };
    // console.log(allContents);
    return allContents ? (
        <div>
            <Header />
            <div className='body-container'>
                <Collections allContents={allContents} />
                <ContentTypeList allContents={allContents} handler={handler} />
                <ContentEditContainer content={selectedContent} />
            </div>
        </div>
    ) : (<div>Loading...</div>);
}