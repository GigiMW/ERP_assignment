// src/App.js
import React from 'react';
import FileUpload from './components/FileUpload';
import FolderManagement from './components/FolderManagement';
import Tagging from './components/Tagging';
import AccessControl from './components/AccessControl';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Document Manager</h1>
        
        <FileUpload />
        <FolderManagement />
        <Tagging />
        <AccessControl />
      </div>
    </div>
  );
}

export default App;