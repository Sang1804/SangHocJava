window.onload = function () {
  document.getElementById("null").textContent = typeof null;
  document.getElementById("undefined").textContent = typeof undefined;
  document.getElementById("0").textContent = typeof 0;
  var True;
  document.getElementById("True").textContent = typeof True;
  document.getElementById("true").textContent = typeof true;
  document.getElementById("string-true-type").textContent = typeof "True";
  document.getElementById("1e5").textContent = typeof 1e5;
  document.getElementById("3.1415").textContent = typeof 3.1415;
};
var results = "Kết quả của typeof(3.1415)= " + typeof 3.1415;
document.getElementById("results").textContent = results;
