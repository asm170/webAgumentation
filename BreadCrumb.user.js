// ==UserScript==
// @name         BreadCrumb
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://es.wikipedia.org/*
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.slim.min.js
// ==/UserScript==

var i;

$(document).ready(function() {
    var breadcrumb = document.createElement('div');
    breadcrumb.id = "breadcrumb";

    if(localStorage.getItem("i") != null){
        i = parseInt(localStorage.getItem("i"))+1;
        localStorage.setItem("i", i);
    }else{
        i = 0;
        localStorage.setItem("i", i);
    }
    localStorage.setItem(i.toString(), location.href);
    localStorage.setItem("name"+i.toString(), document.getElementById("firstHeading").innerText);
    if(i == 6){
        localStorage.setItem("0", localStorage.getItem("1"));
        localStorage.setItem("name0", localStorage.getItem("name1"));
        localStorage.setItem("1", localStorage.getItem("2"));
        localStorage.setItem("name1", localStorage.getItem("name2"));
        localStorage.setItem("2", localStorage.getItem("3"));
        localStorage.setItem("name2", localStorage.getItem("name3"));
        localStorage.setItem("3", localStorage.getItem("4"));
        localStorage.setItem("name3", localStorage.getItem("name4"));
        localStorage.setItem("4", localStorage.getItem("5"));
        localStorage.setItem("name4", localStorage.getItem("name5"));
        localStorage.setItem("5", localStorage.getItem("6"));
        localStorage.setItem("name5", localStorage.getItem("name6"));
        i = 5;
        localStorage.setItem("i", "5");
    }
    document.body.appendChild(breadcrumb);
    $('#breadcrumb').css({
        'position': 'fixed',
        'height': '50px',
        'left': '0',
        'top': '0',
        'width': '100%',
        'background-color': '#FCF04A',
        'vertical-align': 'bottom',
        'visibility': 'visible',
    });
    for(var x=0;x<i;x++){
        var link = document.createElement("a");
        link.href = localStorage.getItem(x.toString());
        link.innerText=localStorage.getItem("name"+x.toString());
        link.className="linkBread";
        $('#breadcrumb').append(link);
        document.getElementById("breadcrumb").innerHTML += " > ";
    }
    $('.linkBread').each(function(){
        $(this).css({
            'padding':'3px',
        });
    });
});