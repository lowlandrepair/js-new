let text = document.getElementById("p00").innerHTML;
let search = text.search("digital school");
document.getElementById("demo").innerHTML = search;

function myFunction() {
  let demo = document.getElementById("demo1");
  let text = demo.innerHTML;
  if (/kosova/i.test(text)) {
    demo.innerHTML = text.replace(/kosova/i, "Mitie");
  } else {
    demo.innerHTML = text.replace(/mitie/i, "kosova");
  }
}

let text2 = document.getElementById("p01").innerHTML;
const pattern = /e/;
document.getElementById("demo2").innerHTML = pattern.test(text2);

let text3 = document.getElementById("p02").innerHTML;
const matchs = text3.match(/e/g);
document.getElementById("demo3").innerHTML = matchs ? matchs.join(", ") : "No Matches";

// Display the count of 'e's
const eCount = matchs ? matchs.length : 0;
document.getElementById("demo3count").innerHTML = `Number of 'e': ${eCount}`;


