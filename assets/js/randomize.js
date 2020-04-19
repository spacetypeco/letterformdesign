document.addEventListener("DOMContentLoaded", function(event) { 
  var ul = document.querySelector('.content-wrap.listing-wrap');
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
});

