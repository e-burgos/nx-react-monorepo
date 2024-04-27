import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '@react-monorepo/dashboard';
import { Accounts } from '@react-monorepo/accounts';
import { Wallets } from '@react-monorepo/wallets';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title="host" />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/accounts" element={<Accounts />}></Route>
      <Route path="/wallets" element={<Wallets />}></Route>
    </Routes>
  );
}

export default App;
