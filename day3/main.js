var button1 = document.querySelector('btn1');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
v_button = document.getElementById('btn4');
v_text = document.getElementById('fatmire');

btn1.addEventListener('click', function(){
   btn1.style.backgroundColor = randomcolor();
   btn1.style.color = randomcolor();
})

// button1.onclick = function(){
//     alert("Hello");
// }

button2.onmouseover = function(){
    alert("Mouse is over the button!");
}

button3.onmouseleave = function(){
    alert("Mouse has left the button!");
}




v_button.onclick = function() {
    v_text.style.color = randomcolor();
    v_text.style.backgroundColor = randomcolor();
    v_text.style.textAlign = "center";
    v_text.style.fontSize = "100px";
    v_text.style.padding = "20px";
}




function randomcolor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

window.onload = function() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn) {
        btn.style.backgroundColor = randomcolor();
        btn.style.color = randomcolor();
    });
};


var btn_circle = document.getElementById('btnCircle');
var btn_rec = document.getElementById('btnRect');
var btn_triangle = document.getElementById('btnTriangle');

var circle = document.getElementById('circle');
var rect = document.getElementById('rect');
var triangle = document.getElementById('triangle');

btn_circle.onclick = function() {
    circle.setAttribute("class", "circle");
}
btn_rec.onclick = function() {
    rect.setAttribute("class", "rect");
}
btn_triangle.onclick = function() {
    triangle.setAttribute("class", "triangle");
}

// Hide shape on click
circle.onclick = function() {
    circle.setAttribute("class", "hide");
}
rect.onclick = function() {
    rect.setAttribute("class", "hide");
}
triangle.onclick = function() {
    triangle.setAttribute("class", "hide");
}

