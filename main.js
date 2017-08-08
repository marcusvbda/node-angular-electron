
// server desktop
var app = require('app');
var BrowserWindow = require('browser-window');
 
// referência global para manter a instância da janela até que sejam fechadas pelo usuário então ele irá ser fechado quando o JavaScript fizer Garbage collection
var mainWindow = null;
 
// Sair da aplicação quando todas as janelas forem fechadas
app.on('window-all-closed', function() 
{
  if (process.platform != 'darwin') 
  {
    app.quit();
  }
});
 
app.on('ready', function() 
{
  // Cria a janela do browser.
  mainWindow = new BrowserWindow({width: 800, height: 600, frame : true});

  mainWindow.maximize();


  mainWindow.setMenu(null);

 
  // Carrega o arquivo html principal.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
 
  // aber o DevTools. (console, inspecionar elemento, etc)
  mainWindow.webContents.openDevTools(); 
 
  // Evento emitido quando a janela é fechada, usado para destruir instancia.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });


});



// para gerar executável
// npm run win32s
// npm run win64  
// npm run linux64
// npm run osx