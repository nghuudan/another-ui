module.exports = {
  preset: 'ts-jest',
  roots: ['./packages'],
  setupFilesAfterEnv: ['./node_modules/@testing-library/jest-dom'],
};
