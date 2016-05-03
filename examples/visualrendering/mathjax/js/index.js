// Set up your favorit (Google) Fonts


var updateFrames = function() {
  var OUTPUTS = ['CommonHTML','SVG','HTML-CSS'];
  var content = document.getElementById('input').innerHTML;

  for (var i = 0; i < OUTPUTS.length; i++) {
    var output = OUTPUTS[i];
    var id = output.substring(0,3);
    var frame = document.getElementById(id);
    var doc = frame.contentDocument;

    var h = document.createElement('h3');
    h.innerHTML = output + " Output";
    doc.body.appendChild(h);

    var el = document.createElement('section');
    el.innerHTML = content;
    doc.body.appendChild(el);

    var mjconf = doc.createElement('script');
    mjconf.type = "text/x-mathjax-config";
    mjconf.text = 'MathJax.Hub.Config({jax: ["input/MathML","output/' + output + '"], extensions: ["mml2jax.js"], showProcessingMessages: false, messageStyle: "none"});';
    doc.body.appendChild(mjconf);

    var mj = doc.createElement('script');
    mj.type = "text/javascript";
    mj.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js";
    doc.body.appendChild(mj);

  }

}

updateFrames();

var getFont = function(name) {
  fontName = name;
  var named = name.replace(/ /g, "+");
  gfont_url = "https://fonts.googleapis.com/css?family=" + named;
  css = 'body {  font-family: "' + fontName + '", sans-serif;}';
  updateFrames();
};
