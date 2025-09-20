import React, { useEffect, useState } from 'react';

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('${API}/api/contacts?page=1&limit=50');
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to fetch');
        setLoading(false);
        return;
      }
      setContacts(data.contacts || []);
    } catch (err) {
      setError('Request failed');
    }
    setLoading(false);
  }

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">Stored Contacts</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && (
        <div className="mt-4 space-y-3">
          {contacts.length === 0 && (
            <div className="text-gray-600">No contacts found.</div>
          )}
          {contacts.map(c => (
            <div key={c._id} className="card p-4 rounded">
              <div className="text-sm text-gray-500">
                {new Date(c.createdAt).toLocaleString()}
              </div>
              <div className="font-semibold">
                {c.name} — {c.email}
              </div>
              <div className="mt-2 text-gray-700">{c.message}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}