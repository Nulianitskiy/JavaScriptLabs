for (let li of sweet__list.querySelectorAll("li")) {
    let span = document.createElement("span");
    span.classList.add("show");
    li.prepend(span);
    span.append(span.nextSibling);
  }
  
  sweet__list.onclick = function (event) {
    if (event.target.tagName != "SPAN") return;
  
    let childrenList = event.target.parentNode.querySelector("ul");
    if (!childrenList) return;
    childrenList.hidden = !childrenList.hidden;
  
    if (childrenList.hidden) {
      event.target.classList.maxHeight = null;           //add("hide");
      //event.target.classList.remove("show");
    } else {
      event.target.classList.maxHeight = panel.scrollHeight + "px";                      //add("show");
      //event.target.classList.remove("hide");
    }
  };