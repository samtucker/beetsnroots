function showBreakfast() {
  document.getElementById('breakfast').style.display = "block";
  document.getElementById('lunch').style.display = "none";
  document.getElementById('juice').style.display = "none";
  document.getElementById('drink').style.display = "none";
}

function showLunch() {
  document.getElementById('breakfast').style.display = "none";
  document.getElementById('lunch').style.display = "block";
  document.getElementById('juice').style.display = "none";
  document.getElementById('drink').style.display = "none";
}

function showJuice() {
  document.getElementById('breakfast').style.display = "none";
  document.getElementById('lunch').style.display = "none";
  document.getElementById('juice').style.display = "block";
  document.getElementById('drink').style.display = "none";
}

function showDrinks() {
  document.getElementById('breakfast').style.display = "none";
  document.getElementById('lunch').style.display = "none";
  document.getElementById('juice').style.display = "none";
  document.getElementById('drink').style.display = "block";
}
