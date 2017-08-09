// server desktop
const electron = require('electron');
const app      = electron.app;

const BrowserWindow = electron.BrowserWindow;
 
let mainWindow 

function createWindow()
{
  mainWindow = new BrowserWindow({fullscreen:true, frame : false, transparent:false, icon:__dirname+"/assets/img/icons/favicon.png"});
  mainWindow.setMenu(null);
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // console
  // mainWindow.webContents.openDevTools(); 


  mainWindow.on('closed', function() 
  {
    mainWindow = null;
  });

}
 
app.on('ready', createWindow)

app.on('window-all-closed', function() 
{
  if (process.platform != 'darwin') 
  {
    app.quit();
  }
});

// para gerar executável
// npm run win32
// npm run win64  
// npm run linux64
// npm run osx