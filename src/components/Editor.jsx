import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ value, onChange }) => {
    return (
        <div>
        <ReactQuill value={value} onChange={onChange} />
        </div>
    );
};

export default Editor;
