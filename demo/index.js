document.getElementById('convert').addEventListener('click', wylieConvert);

function wylieConvert() {
  var e = document.getElementById('wylieSelect');
  selector = e.options[e.selectedIndex].value;
  var text = document.getElementById('textInput').value;
  if('1' === selector) {
    var result = wylie.toWylie(text);
  } else if('2' === selector) {
    var result = wylie.fromWylie(text);
  } else {
    return;
  }
  document.getElementById('textOutput').value = result;
}
