const { app , BrowserWindow } = require('electron');

app.on('before-quit', ()=>{
    console.log('saliendo');
});

app.on('ready',()=>{

    let win = new BrowserWindow({
        webPreferences:{
            contextIsolation: false,
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            enableRemoteModule: true},
        width: 1024,
        height: 768,
        maxHeight: 768,
        maxWidth:1080,
        'title': 'Parroquia Jesus Eucaristia',
        center:true,
        maximizable: true,  //no deja maximizar
        show:false  //ocultar la ventana
    });

    //en once solamente una vez
    win.once('ready-to-show',()=>{
        win.show(); //muestra la ventana actual
    });

    //la ventana va a cargar la url interna
    win.loadURL(`file://${__dirname}/renderer/index.html`);
})