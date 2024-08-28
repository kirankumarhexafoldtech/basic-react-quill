import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownViewer = ({ content }) => {
    return (
        <div className="markdown-viewer">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownViewer;
