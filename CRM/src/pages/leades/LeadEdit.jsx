import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function LeadEdit() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    setLoading(true);
    setLead(null);

  
    const timer = setTimeout(() => {    const fakeLead = { id, name: `Lead ${id} Name` };
      setLead(fakeLead);
      setName(fakeLead.name);
      setLoading(false);
    }, 1000);

    
    return () => clearTimeout(timer);
  }, [id]);

  const handleSave = () => {
   
    alert(`Lead ${id} saved with name: "${name}"`);
  };

  if (loading) return <p>Loading lead data...</p>;
  if (!lead) return <p>Lead not found.</p>;

  return (
    <div>
      <h2>Edit Lead #{lead.id}</h2>
      <label>
        Name:{' '}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Lead Name"
        />
      </label>
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
