const { app, BrowserWindow, ipcMain } = require('electron');
const { getStartUrl } = require('./pathUtils');

const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '127.0.0.1', 
  user:'jesus', 
  password: 'imperator2971',
  database: 'dialca',
  port: 3310,
  connectionLimit: 5
});

// Método para realizar consultas a la base de datos
async function realizarConsulta(sql) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(sql);
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release();
  }
}

ipcMain.on('realizar-consulta', async (event, arg) => {
  try {
    console.log("Consulta recibida: ", arg)
    const result = await realizarConsulta(arg);
    event.reply('consulta-realizada', result);
  } catch (e) {
    event.reply('consulta-error', e.message);
  }
});

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false, // No muestra la ventana inmediatamente
    webPreferences: {
      preload: `${__dirname}/preload.js`, // Usa una template string o concatena directamente            
      nodeIntegration: true,
      contextIsolation: true
    }
  });

  // Configura la URL de inicio según si la app está empaquetada o no
  const startUrl = getStartUrl(); // Utiliza la función importada

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
