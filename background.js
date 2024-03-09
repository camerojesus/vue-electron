const { app, BrowserWindow } = require('electron');
const { join } = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false, // No muestra la ventana inmediatamente
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Configura la URL de inicio según si la app está empaquetada o no
  const startUrl = app.isPackaged
    ? `file://${join(__dirname, 'dist', 'index.html')}` // Ruta para producción
    : 'http://localhost:5173'; // Asegúrate de que este es el puerto correcto para tu servidor de desarrollo

  mainWindow.loadURL(startUrl);

  // Maximiza la ventana antes de mostrarla, para evitar el salto visual
  mainWindow.maximize();

  // Muestra la ventana solo después de estar maximizada y lista para mostrar
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
  });

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
