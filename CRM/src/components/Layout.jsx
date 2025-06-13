import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ padding: '10px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/leads" style={{ marginRight: 10 }}>
          Leads
        </NavLink>
        <NavLink to="/deals" style={{ marginRight: 10 }}>
          Deals
        </NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
