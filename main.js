function spinner() {
  var x = document.getElementById("spinBtn");
  var y = document.getElementById("spinBox");
  if(x.innerText === "Stop Spinning"){
    x.innerText = "Start Spinning";
  }
  else{
    x.innerText = "Stop Spinning";
  }
  y.classList.toggle("stop");
}