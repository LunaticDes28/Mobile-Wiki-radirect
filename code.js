var mobileURLRe = /(?:zh.m.wikipedia.org|^)/;

if (mobileURLRe.test(document.location.href)) {
  var target = document.location.href.replace("m.wikipedia", "wikipedia");
  window.location.replace(target)
}
