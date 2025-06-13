import React, { useState } from 'react';
import LeadQuickView from './LeadQuickView';

const sampleLeads = [
  { id: 1, name: 'Alpha Corp' },
  { id: 2, name: 'Beta LLC' },
  { id: 2, name: 'Creative Corp' }
];

export default function LeadList() {
  const [selectedLead, setSelectedLead] = useState(null);

  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
  };

  const closeQuickView = () => {
    setSelectedLead(null);
  };

  return (
    <div>
      <h1>Leads</h1>
      <ul>
        {sampleLeads.map((lead) => (
          <li key={lead.id}>
            <span
              style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
              onClick={() => handleLeadClick(lead)}
            >
              {lead.name}
            </span>
          </li>
        ))}
      </ul>

     
      <LeadQuickView lead={selectedLead} onClose={closeQuickView} />
    </div>
  );
}
