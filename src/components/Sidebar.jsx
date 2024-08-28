import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/docs/page1">Page 1</Link></li>
                <li><Link to="/docs/page2">Page 2</Link></li>
                <li><Link to="/edit/page3">Editor</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
