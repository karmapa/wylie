document.getElementById('toWylie').addEventListener('click', toWylie);

function toWylie() {
  var text = document.getElementById('toWylieInput').value;
  var result = wylie.toWylie(text);
  document.getElementById('toWylieOutput').value = result;
}

document.getElementById('fromWylie').addEventListener('click', fromWylie);

function fromWylie() {
  var text = document.getElementById('fromWylieInput').value;
  var result = wylie.fromWylie(text);
  document.getElementById('fromWylieOutput').value = result;
}