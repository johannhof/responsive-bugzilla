document.head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1">';

document.getElementById("comment").addEventListener("focus", function(e) {
  e.target.setAttribute("rows", "5");
});
