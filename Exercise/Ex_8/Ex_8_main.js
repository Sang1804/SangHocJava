var num = Math.ceil(Math.random() * 10);

function checkGuess() {
  var gnum = document.getElementById("userGuess").value;
  if (gnum == num) document.getElementById("result").textContent = "Match";
  else {
    document.getElementById("result").textContent =
      "Not match, the number is " + num;
  }
  setTimeout(function () {
    reloadEnabled = true;
    document.body.onclick = function () {
      if (reloadEnabled) {
        location.reload();
      }
    };
  }, 1000);
}
