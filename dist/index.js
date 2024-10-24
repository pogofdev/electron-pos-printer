!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("electronPosPrinter",[],t):"object"==typeof exports?exports.electronPosPrinter=t():e.electronPosPrinter=t()}(global,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{PosPrinter:()=>a});const n=require("electron"),i=require("path");function r(e,t,i){return new Promise(((r,o)=>{n.ipcMain.once(`${e}-reply`,((e,t)=>{t.status?r(t):o(t.error)})),t.send(e,i)}))}function o(e){return Math.ceil(264.5833*e)}var s=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((i=i.apply(e,t||[])).next())}))};if("renderer"==process.type)throw new Error('electron-pos-printer: use remote.require("electron-pos-printer") in the render process');class a{static print(e,t){return new Promise(((c,l)=>{t.preview||t.printerName||t.silent||l(new Error("A printer name is required, if you don't want to specify a printer name, set silent to true").toString()),"object"==typeof t.pageSize&&(t.pageSize.height&&t.pageSize.width||l(new Error("height and width properties are required for options.pageSize")));let d=!1,p=null;const g=t.timeOutPerLine?t.timeOutPerLine*e.length+200:400*e.length+200;t.preview&&t.silent||setTimeout((()=>{if(!d){l(p||"[TimedOutError] Make sure your printer is connected"),d=!0}}),g),a.mainWindow||(a.mainWindow=new n.BrowserWindow(Object.assign(Object.assign({},function(e){let t=219,n=1200;if("string"==typeof e)switch(e){case"44mm":t=166;break;case"57mm":t=215;break;case"58mm":t=219;break;case"76mm":t=287;break;case"78mm":t=295;break;case"80mm":t=302}else"object"==typeof e&&(t=e.width,n=e.height);return{width:t,height:n}}(t.pageSize)),{show:!!t.preview,webPreferences:{nodeIntegration:!0,contextIsolation:!1}}))),a.mainWindow.on("closed",(()=>{a.mainWindow=null})),a.mainWindow.loadFile(t.pathTemplate||(0,i.join)(__dirname,"renderer/index.html")),a.mainWindow.webContents.on("did-finish-load",(()=>s(this,void 0,void 0,(function*(){return yield r("body-init",a.mainWindow.webContents,t),a.renderPrintDocument(a.mainWindow,e).then((()=>s(this,void 0,void 0,(function*(){let{width:e,height:n}=function(e){let t=58e3,n=1e4;if("string"==typeof e)switch(e){case"44mm":t=Math.ceil(44e3);break;case"57mm":t=Math.ceil(57e3);break;case"58mm":t=Math.ceil(58e3);break;case"76mm":t=Math.ceil(76e3);break;case"78mm":t=Math.ceil(78e3);break;case"80mm":t=Math.ceil(8e4)}else"object"==typeof e&&(t=o(e.width),n=o(e.height));return{width:t,height:n}}(t.pageSize);if("string"==typeof t.pageSize){const e=yield a.mainWindow.webContents.executeJavaScript("document.body.clientHeight");console.log("convertPixelsToMicrons(clientHeight);",o(e),e),n=o(e)}let i=21e4;i=n<=21e4?21e4:n<=297e3?297e3:3276e3,a.mainWindow.webContents.print(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({silent:!!t.silent,printBackground:!!t.printBackground,deviceName:t.printerName,copies:(null==t?void 0:t.copies)||1,pageSize12:{width:e,height:n},pageSize:{width:72e3,height:i}},t.header&&{color:t.header}),t.footer&&{color:t.footer}),t.color&&{color:t.color}),t.printBackground&&{printBackground:t.printBackground}),t.margins&&{margins:t.margins}),t.landscape&&{landscape:t.landscape}),t.scaleFactor&&{scaleFactor:t.scaleFactor}),t.pagesPerSheet&&{pagesPerSheet:t.pagesPerSheet}),t.collate&&{collate:t.collate}),t.pageRanges&&{pageRanges:t.pageRanges}),t.duplexMode&&{duplexMode:t.duplexMode}),t.dpi&&{dpi:t.dpi}),((e,n)=>{n&&(p=n,l(n)),d||(c({complete:e,options:t}),d=!0)}))})))).catch((e=>l(e)))}))))}))}static renderPrintDocument(e,t){return new Promise(((n,i)=>s(this,void 0,void 0,(function*(){for(const[n,o]of t.entries()){if("image"===o.type&&!o.path&&!o.url){e.close(),i(new Error("An Image url/path is required for type image").toString());break}if(o.css){e.close(),i(new Error("`options.css` in {css: "+o.css.toString()+"} is no longer supported. Please use `options.style` instead. Example: {style: {fontSize: 12}}"));break}if(o.style&&"object"!=typeof o.style){e.close(),i(new Error('`options.styles` at "'+o.style+'" should be an object. Example: {style: {fontSize: 12}}'));break}try{const t=yield r("render-line",e.webContents,{line:o,lineIndex:n});if(!t.status)return e.close(),void i(t.error)}catch(e){i(e)}}n({message:"page-rendered"})}))))}}return t})()));