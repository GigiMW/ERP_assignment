import React, { useState } from 'react';

const Tagging = () => {
  const [documentId, setDocumentId] = useState('');
  const [tags, setTags] = useState('');
  const [taggedDocuments, setTaggedDocuments] = useState({});
  const [message, setMessage] = useState('');

  const handleTagUpdate = (e) => {
    e.preventDefault();
    if (!documentId || !tags.trim()) {
      setMessage('Please enter document ID and tags');
      return;
    }

    const tagArray = tags.split(',').map(tag => tag.trim());
    setTaggedDocuments({
      ...taggedDocuments,
      [documentId]: tagArray
    });
    setMessage(`Tags updated for document ${documentId}`);
    setDocumentId('');
    setTags('');
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Tagging</h2>
      <form onSubmit={handleTagUpdate} className="space-y-4">
        <input
          type="text"
          value={documentId}
          onChange={(e) => setDocumentId(e.target.value)}
          placeholder="Document ID"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma-separated)"
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
        >
          Update Tags
        </button>
        {message && <p className="mt-2 text-sm text-purple-600">{message}</p>}
      </form>

      <div className="mt-4">
        <h3 className="text-xl font-medium">Tagged Documents</h3>
        <ul className="list-disc pl-5 mt-2">
          {Object.entries(taggedDocuments).map(([docId, docTags]) => (
            <li key={docId} className="mt-1">
              Document {docId}: {docTags.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tagging;