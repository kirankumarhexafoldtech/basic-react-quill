import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownViewer from '../components/MarkdownViewer';

const DocPage = () => {
    const { docId } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        // Simulate fetch
        const fetchData = async () => {
            const data = `# Documentation for ${docId}
This is the content for ${docId}.`;
            setContent(data);
        };
        fetchData();
    }, [docId]);

    return <MarkdownViewer content={content} />;
};

export default DocPage;
