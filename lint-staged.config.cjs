module.exports = {
  '*.{js,jsx,ts,tsx,astro,svelte}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': ['prettier --write'],
}
