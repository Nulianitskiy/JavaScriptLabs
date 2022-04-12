(function setHideEvents(el) {
    el.onmouseover = function() {
          this.classList.add('hidden')
          document.getElementById('true__life').classList.add('shown')
    }
    el.onmouseout = function() {
          this.classList.remove('hidden')
          document.getElementById('true__life').classList.remove('shown')
    }   
  })(document.getElementById('smooth'))