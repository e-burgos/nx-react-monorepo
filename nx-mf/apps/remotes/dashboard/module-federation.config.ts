import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  remotes: ['wallets'],
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
