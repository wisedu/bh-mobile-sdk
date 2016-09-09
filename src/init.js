export default () => {
  function injectScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
  }

  function init(){

    var pathPrefix = "mamp://injectionmamp/";
    if (pathPrefix === null) {
      console.log('Could not find mamp.js script tag. Plugin loading may fail.');
      pathPrefix = '';
    }
    injectScript(pathPrefix + 'cordova.js');
  }

  init();
  window.close = function(){
    window.location.href = 'mamp://close';
  };
  window.mamp = {};
  window.mamp.initEnv = function(callback){
    document.addEventListener("deviceready", callback, false);
  };
}
