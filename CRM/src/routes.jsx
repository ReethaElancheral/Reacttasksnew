import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import LeadEdit from './pages/leades/LeadEdit';
import LeadList from './pages/leades/LeadList';
import DealList from './pages/deals/DealList';
import ContactList from './pages/contacts/ContactList';

import withPermissions from './hoc/withPermissions';

const ProtectedLeadEdit = withPermissions(LeadEdit, 'canEditLead');

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="leads" element={<LeadList />} />
        <Route path="/leads/:id/edit" element={<ProtectedLeadEdit />} />
        <Route path="deals" element={<DealList />} />
        <Route path="contacts" element={<ContactList />} />
      </Route>
    </Routes>
  );
}
