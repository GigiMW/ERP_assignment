// src/components/FileUpload.js
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState({
    title: '',
    description: '',
    tags: ''
  });
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMetadataChange = (e) => {
    const { name, value } = e.target;
    setMetadata(prev => ({ ...prev, [name]: value }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file');
      return;
    }

    // Simple file type validation (in real app, use FileTypeValidation Library)
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.ms-excel'];
    if (!validTypes.includes(file.type)) {
      setMessage('Invalid file type. Please upload PDF, Word, or Excel files.');
      return;
    }

    // Simulate file upload
    setMessage('File uploaded successfully with ID: DOC123456');
    setFile(null);
    setMetadata({ title: '', description: '', tags: '' });
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">File Upload</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.xls,.xlsx"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="title"
          value={metadata.title}
          onChange={handleMetadataChange}
          placeholder="Title"
          className="border p-2 rounded w-full"
        />
        <textarea
          name="description"
          value={metadata.description}
          onChange={handleMetadataChange}
          placeholder="Description"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="tags"
          value={metadata.tags}
          onChange={handleMetadataChange}
          placeholder="Tags (comma-separated)"
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Upload File
        </button>
        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default FileUpload;