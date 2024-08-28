import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import DocPage from './pages/DocPage';
import EditPage from './pages/EditPage';
import "./App.css";

function App() {
    return (
            <div className="app">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/docs/:docId" element={<DocPage />} />
                        <Route path="/edit/:docId" element={<EditPage />} />
                    </Routes>
                </div>
            </div>
    );
}

export default App;
