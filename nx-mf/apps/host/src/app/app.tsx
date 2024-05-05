import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Loans = React.lazy(() => import('loans/Module'));

const Dashboard = React.lazy(() => import('dashboard/Module'));

const Session = React.lazy(() => import('session/Module'));

const Wallets = React.lazy(() => import('wallets/Module'));

const Settings = React.lazy(() => import('settings/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/loans">Loans</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/session">Session</Link>
        </li>

        <li>
          <Link to="/wallets">Wallets</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/loans" element={<Loans />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/session" element={<Session />} />

        <Route path="/wallets" element={<Wallets />} />

        <Route path="/settings" element={<Settings />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
