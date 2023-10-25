window.addEventListener('DOMContentLoaded',init,false);
            
function init() {
    alert('The page loaded!');
    var buttons = document.getElementsByTagName("button")
     buttons[0].addEventListener('click', changeColor, false)
   
    buttons[1].addEventListener('click', changeColor2, false)
        
            }

function changeColor() {
var colorMe1 = document.getElementById("colorToggle") 
{colorMe1.style.backgroundColor = "pink";
}
}

function changeColor2() {
    var pars = document.getElementsByTagName('p')
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "purple";
    }
}
/* here, style is a *property*: the CSS styling of an element: you can add a CSS property after invoking style. */


    /* here, style is a *property*: the CSS styling of an element: you can add a CSS property after invoking style. */

