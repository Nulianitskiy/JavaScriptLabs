var arr=[];

var n = 0;

let children=document.body.childNodes;
for(let i=0; i<children.length; i++) { 
    if (children[i].innerHTML == undefined) {
        n++;
    }}

let message2 = document.querySelector('.dom_element');
message2.textContent =  n;