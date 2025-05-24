import React, { useState } from 'react';

const AccessControl = () => {
  const [documentId, setDocumentId] = useState('');
  const [userId, setUserId] = useState('');
  const [permissionLevel, setPermissionLevel] = useState('view');
  const [accessControls, setAccessControls] = useState({});
  const [message, setMessage] = useState('');

  const handleUpdatePermissions = (e) => {
    e.preventDefault();
    if (!documentId || !userId) {
      setMessage('Please enter document ID and user ID');
      return;
    }

    setAccessControls({
      ...accessControls,
      [documentId]: {
        ...accessControls[documentId],
        [userId]: permissionLevel
      }
    });
    setMessage(`Permissions updated for user ${userId} on document ${documentId}`);
    setDocumentId('');
    setUserId('');
    setPermissionLevel('view');
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Role-Based Access Control</h2>
      <form onSubmit={handleUpdatePermissions} className="space-y-4">
        <input
          type="text"
          value={documentId}
          onChange={(e) => setDocumentId(e.target.value)}
          placeholder="Document ID"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          className="border p-2 rounded w-full"
        />
        <select
          value={permissionLevel}
          onChange={(e) => setPermissionLevel(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="view">View</option>
          <option value="edit">Edit</option>
          <option value="download">Download</option>
        </select>
        <button
          type="submit"
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
        >
          Update Permissions
        </button>
        {message && <p className="mt-2 text-sm text-yellow-600">{message}</p>}
      </form>

      <div className="mt-4">
        <h3 className="text-xl font-medium">Access Controls</h3>
        <ul className="list-disc pl-5 mt-2">
          {Object.entries(accessControls).map(([docId, users]) => (
            <li key={docId} className="mt-1">
              Document {docId}:
              <ul className="list-disc pl-5">
                {Object.entries(users).map(([user, perm]) => (
                  <li key={user}>User {user}: {perm}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccessControl;