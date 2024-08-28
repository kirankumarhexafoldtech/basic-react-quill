import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '../components/Editor';

const EditPage = () => {
    const { docId } = useParams();
    const [content, setContent] = useState('');

    const handleSave = () => {
        // Save content logic
    };

    return (
        <div>
            <Editor value={content} onChange={setContent} />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditPage;
