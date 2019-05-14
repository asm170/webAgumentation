// ==UserScript==
// @name         LinksWikipedia
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://es.wikipedia.org/*
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.slim.min.js
// ==/UserScript==

$(document).ready(function() {
    //Index
    $('.new').each(function() {
        var word = $(this).prop('href');
        word = word.split("title=")[1];
        word = word.split("&")[0];
        var auxlink = "https://en.wikipedia.org/wiki/"+word;
        $(this).prop('href', auxlink);
    });
});


