
import getimpactnow_assets from "ic:canisters/getimpactnow_assets";

console.log('test');

(async () => {
  const injectJsFiles = [];
  
  injectJsFiles.push(
    await getimpactnow_assets.retrieve('static/js/runtime-main.67543806.js'),await getimpactnow_assets.retrieve('static/js/2.7104d745.chunk.js'),await getimpactnow_assets.retrieve('static/js/main.22017ded.chunk.js')
  );
  
  injectJsFiles.forEach(content => {
    const s = document.createElement("script");
    s.type = 'text/javascript';
    s.innerHTML = new TextDecoder().decode(new Uint8Array(content));
    
    document.body.appendChild(s);
  });
})();
  