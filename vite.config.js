import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages:
// Set `base` to "/<your-repo-name>/" (with leading and trailing slashes).
// Example: if your repo is github.com/BhavyapriyaN/portfolio, use base: '/portfolio/'
// If you deploy to a "username.github.io" root repo, use base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
