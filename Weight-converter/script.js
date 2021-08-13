document.getElementById("output").style.display = "none";

document.getElementById("lbsInput").addEventListener("input", function (e) {
  let lbs = e.target.value;
  document.getElementById("output").style.display = "block";
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});
