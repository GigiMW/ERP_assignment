import React, { useState } from 'react';

const FolderManagement = () => {
  const [folderName, setFolderName] = useState('');
  const [parentFolderId, setParentFolderId] = useState('');
  const [folders, setFolders] = useState([]);
  const [message, setMessage] = useState('');

  const handleCreateFolder = (e) => {
    e.preventDefault();
    if (!folderName.trim()) {
      setMessage('Please enter a folder name');
      return;
    }

    const newFolder = {
      id: `FOLDER${Date.now()}`,
      name: folderName,
      parentId: parentFolderId || null
    };

    setFolders([...folders, newFolder]);
    setMessage(`Folder "${folderName}" created with ID: ${newFolder.id}`);
    setFolderName('');
    setParentFolderId('');
  };

  const handleDeleteFolder = (folderId) => {
    setFolders(folders.filter(folder => folder.id !== folderId));
    setMessage('Folder deleted successfully');
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Folder Management</h2>
      <form onSubmit={handleCreateFolder} className="space-y-4">
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="Folder Name"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          value={parentFolderId}
          onChange={(e) => setParentFolderId(e.target.value)}
          placeholder="Parent Folder ID (optional)"
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Create Folder
        </button>
        {message && <p className="mt-2 text-sm text-blue-600">{message}</p>}
      </form>

      <div className="mt-4">
        <h3 className="text-xl font-medium">Existing Folders</h3>
        <ul className="list-disc pl-5 mt-2">
          {folders.map(folder => (
            <li key={folder.id} className="flex justify-between items-center">
              {folder.name} (ID: {folder.id})
              {folder.parentId && `(Parent: ${folder.parentId})`}
              <button
                onClick={() => handleDeleteFolder(folder.id)}
                className="ml-4 bg-red-500 text-white p-1 rounded text-sm hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FolderManagement;