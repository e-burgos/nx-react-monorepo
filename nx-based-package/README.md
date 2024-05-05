# Initial setup for NX workspace with Vite and integrated repository option

In this setup, you'll learn how to add Nx to a repository with an existing NPM workspaces setup. You'll see how Nx can provide immediate value with very little configuration and then you can gradually enable more features.

- Add Nx to the repository with a single command
- Configure caching for your existing tasks
- Configure a task pipeline
- Use Nx Plugins to automatically configure caching

Follow these tutorial to create a new Nx workspace:

- [NPM Workspaces Tutorial](https://nx.dev/getting-started/tutorials/npm-workspaces-tutorial)

## Generate NPM Workspaces (base-package) monorepo

- Run `npx create-nx-workspace@latest workspace-name` to create a new Nx workspace.
  ✔ Which stack do you want to use? · none
  ✔ Package-based monorepo, integrated monorepo, or standalone project? · package-based
  ✔ Set up CI with caching, distribution and test deflaking · skip
  ✔ Would you like remote caching to make your build faster? · yes
