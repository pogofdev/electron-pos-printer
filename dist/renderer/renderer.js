(()=>{"use strict";var e={496:e=>{e.exports=require("electron")},867:e=>{e.exports=require("jsbarcode")},121:e=>{e.exports=require("qrcode")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=require("fs");var t=n.n(e);const r=require("path");var i=n.n(r),l=function(e,t,n,r){return new(n||(n=Promise))((function(i,l){function o(e){try{s(r.next(e))}catch(e){l(e)}}function d(e){try{s(r.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}s((r=r.apply(e,t||[])).next())}))};const o=n(121);function d(e,t="td"){const n=e.value;let r;return r=document.createElement(t),r.innerHTML=n,r=a(r,Object.assign({padding:"7px 2px"},e.style)),r}function s(e){return new Promise(((n,r)=>l(this,void 0,void 0,(function*(){let l,o=document.createElement("div");const d=["apng","bmp","gif","ico","cur","jpeg","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"];if(o=a(o,{width:"100%",display:"flex",justifyContent:(null==e?void 0:e.position)||"left"}),e.url){if(!function(e){let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol}(e.url)&&(s=e.url,Buffer.from(s,"base64").toString("base64")!==s))return r(`Invalid url: ${e.url}`);l=e.url}else if(e.path)try{const n=t().readFileSync(e.path);let o=i().extname(e.path).slice(1);-1===d.indexOf(o)&&r(new Error(o+" file type not supported, consider the types: "+d.join())),"svg"===o&&(o="svg+xml"),l="data:image/"+o+";base64,"+n.toString("base64")}catch(e){r(e)}var s;let c=document.createElement("img");c=a(c,Object.assign({height:e.height,width:e.width},e.style)),c.src=l,o.prepend(c),n(o)}))))}function a(e,t){for(const n of Object.keys(t))t[n]&&(e.style[n]=t[n]);return e}var c=function(e,t,n,r){return new(n||(n=Promise))((function(i,l){function o(e){try{s(r.next(e))}catch(e){l(e)}}function d(e){try{s(r.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,d)}s((r=r.apply(e,t||[])).next())}))};const u=n(496).ipcRenderer,p=n(867),h=document.getElementById("main");u.on("body-init",(function(e,t){h.style.width=(null==t?void 0:t.width)||"100%",h.style.margin=(null==t?void 0:t.margin)||0,e.sender.send("body-init-reply",{status:!0,error:null})})),u.on("render-line",(function(e,t){var n,r,i;return c(this,void 0,void 0,(function*(){switch(t.line.type){case"html":try{h.appendChild(t.line),e.sender.send("render-line-reply",{status:!0,error:null})}catch(t){e.sender.send("render-line-reply",{status:!1,error:t.toString()})}return;case"text":try{h.appendChild(function(e){const t=e.value;let n=document.createElement("div");return n.innerHTML=t,n=a(n,e.style),n}(t.line)),e.sender.send("render-line-reply",{status:!0,error:null})}catch(t){e.sender.send("render-line-reply",{status:!1,error:t.toString()})}return;case"image":try{const n=yield s(t.line);h.appendChild(n),e.sender.send("render-line-reply",{status:!0,error:null})}catch(t){e.sender.send("render-line-reply",{status:!1,error:t.toString()})}return;case"qrCode":try{const r=document.createElement("div");r.style.display="flex",r.style.justifyContent=(null===(n=t.line)||void 0===n?void 0:n.position)||"left";const i=document.createElement("canvas");i.setAttribute("id",`qrCode${t.lineIndex}`),a(i,{textAlign:t.line.position?"-webkit-"+t.line.position:"-webkit-left"}),r.appendChild(i),h.appendChild(r),yield function(e,{value:t,height:n=15,width:r=1}){return new Promise(((i,l)=>{const d=document.getElementById(e),s={width:r,height:n,errorCorrectionLevel:"H",color:"#000"};o.toCanvas(d,t,s).then(i).catch((e=>{l(e)}))}))}(`qrCode${t.lineIndex}`,{value:t.line.value,width:t.line.width,height:t.line.height}),e.sender.send("render-line-reply",{status:!0,error:null})}catch(t){e.sender.send("render-line-reply",{status:!1,error:t.toString()})}return;case"barCode":try{const n=document.createElement("div"),l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttributeNS(null,"id",`barCode-${t.lineIndex}`),n.appendChild(l),h.appendChild(n),(null===(r=t.line)||void 0===r?void 0:r.style)?a(n,t.line.style):(n.style.display="flex",n.style.justifyContent=(null===(i=t.line)||void 0===i?void 0:i.position)||"left"),p(`#barCode-${t.lineIndex}`,t.line.value,{lineColor:"#000",textMargin:0,fontOptions:"bold",fontSize:t.line.fontsize||12,width:parseInt(t.line.width)||4,height:parseInt(t.line.height)||40,displayValue:!!t.line.displayValue}),e.sender.send("render-line-reply",{status:!0,error:null})}catch(t){e.sender.send("render-line-reply",{status:!1,error:t.toString()})}return;case"table":let l=document.createElement("div");l.setAttribute("id",`table-container-${t.lineIndex}`);let c=document.createElement("table");c.setAttribute("id",`table${t.lineIndex}`),c=a(c,Object.assign({},t.line.style));let u=document.createElement("thead");u=a(u,t.line.tableHeaderStyle);let y=document.createElement("tbody");y=a(y,t.line.tableBodyStyle);let f=document.createElement("tfoot");if(f=a(f,t.line.tableFooterStyle),t.line.tableHeader)for(const n of t.line.tableHeader)if("object"==typeof n)switch(n.type){case"image":yield s(n).then((e=>{const t=document.createElement("th");t.appendChild(e),u.appendChild(t)})).catch((t=>{e.sender.send("render-line-reply",{status:!1,error:t.toString()})}));break;case"text":u.appendChild(d(n,"th"))}else{const e=document.createElement("th");e.innerHTML=n,u.appendChild(e)}if(t.line.tableBody)for(const n of t.line.tableBody){const t=document.createElement("tr");for(const r of n)if("object"==typeof r)switch(r.type){case"image":yield s(r).then((e=>{const n=document.createElement("td");n.appendChild(e),t.appendChild(n)})).catch((t=>{e.sender.send("render-line-reply",{status:!1,error:t.toString()})}));break;case"text":t.appendChild(d(r))}else{const e=document.createElement("td");e.innerHTML=r,t.appendChild(e)}y.appendChild(t)}if(t.line.tableFooter)for(const n of t.line.tableFooter)if("object"==typeof n)switch(n.type){case"image":yield s(n).then((e=>{const t=document.createElement("th");t.appendChild(e),f.appendChild(t)})).catch((t=>{e.sender.send("render-line-reply",{status:!1,error:t.toString()})}));break;case"text":f.appendChild(d(n,"th"))}else{const e=document.createElement("th");e.innerHTML=n,f.appendChild(e)}return c.appendChild(u),c.appendChild(y),c.appendChild(f),l.appendChild(c),h.appendChild(l),void e.sender.send("render-line-reply",{status:!0,error:null})}}))}))})()})();