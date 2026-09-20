// ==UserScript==
// @name         Matrix Mod Menu v2
// @namespace    https://github.com/francamatheus165-prog/matrix-mod-menu
// @version      2.1.0
// @description  Most advanced and feature-rich mod menu for MineFun.io
// @author       Matrix Client / マテウス
// @homepageURL  https://github.com/francamatheus165-prog/matrix-mod-menu
// @supportURL   https://github.com/francamatheus165-prog/matrix-mod-menu
// @match        https://minefun.io/*
// @match        https://sandbox.minefun.io/*
// @run-at       document-start
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @connect      raw.githubusercontent.com
// @connect      minefun.io
// @connect      sandbox.minefun.io
// ==/UserScript==

(function() {
    'use strict';
    const script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/francamatheus165-prog/matrix-mod-menu/main/matrix-mod-menu-v2.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
})();
