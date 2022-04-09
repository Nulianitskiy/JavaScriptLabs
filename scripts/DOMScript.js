var arr=[];


function traversalBFSDOM (rootDom) {
    var n = 0;
    if(!rootDom) return;
    arr.push(rootDom)
    var queue = [rootDom];
    while(queue.length){
        var node = queue.shift();
        if(!node.children.length){
            continue;
        }
        for(var i=0;i<node.children.length;i++){
            arr.push(node.children[i]);
            queue.push(node.children[i]);
            alert(node.children[i].innerHTML.match(/ /g).length);
        }
    }
    return n;
}

var n = 0;

let children=document.body.childNodes;
for(let i=0; i<children.length; i++) { 
    //alert('Obj['+i+']'+children[i].innerHTML);
    if (children[i].innerHTML == undefined) {
        n++;
        //alert('Obj['+i+']'+children[i].innerHTML);
    }}

// var n =0;

// for (let i = 0; i< nodes.lenght;i++){
//     n += nodes[i].innerHTML.match(/ /g).length;
// }
//traversalBFSDOM(document.body);

let message2 = document.querySelector('.dom_element');
message2.textContent =  n;