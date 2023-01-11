module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --ignore-unknown --write'],
  '!*.{js,jsx,ts,tsx}': ['prettier --ignore-unknown --write'],
};
