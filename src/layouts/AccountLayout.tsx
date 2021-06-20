import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AccountLayout: React.FC = (): JSX.Element => (
  <div style={{ backgroundColor: 'yellow' }}>
    <Outlet />
    <br />
    <button type="button">
      <Link to="/">Back</Link>
    </button>
  </div>
);

export default AccountLayout;
