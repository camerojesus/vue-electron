const { join } = require('path');
const getSrcPath = () => join(__dirname, 'src');

function getStartUrl() {
  const app = require('electron').app;
  const startUrl = app.isPackaged
    ? `file://${join(__dirname, 'dist', 'index.html')}`
    : 'http://localhost:5173';
  return startUrl;
}

module.exports = {
  getStartUrl,
  getSrcPath
};