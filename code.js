// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Mobile Wiki redirect
// @author       You
// @match        https://zh.m.wikipedia.org/*
// @icon         
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var mobileURLRe = /(?:zh.m.wikipedia.org|^)/;

if (mobileURLRe.test(document.location.href)) {
  var target = document.location.href.replace("m.wikipedia", "wikipedia");
  window.location.replace(target)
}
})();
