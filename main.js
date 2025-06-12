//jQuery 넣기
var _jQuery = document.createElement("script");
_jQuery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName("head")[0].appendChild(_jQuery);
//CSS 파일 넣기
var _css = document.createElement("link");
_css.rel = "stylesheet";
_css.href = "./style.css";
document.getElementsByTagName("head")[0].appendChild(_css);
//favicon
var _favicon = document.createElement("link");
_favicon.rel = "shortcut icon";
_favicon.href = "/resources/images/team_logo/RBS2_Logo_Square.png";
_favicon.type = "image/x-icon";
document.getElementsByTagName("head")[0].appendChild(_favicon);

window.onload = onLoad;

function onLoad() {
  $("#header").load("/resources/html/header.html");
  $("#footer").load("/resources/html/footer.html");
}
