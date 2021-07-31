"use strict";

var container = document.querySelector('.container');

for (var i = 1; i <= 9; i++) {
  var a = document.createElement('a');
  a.setAttribute('href', '#');
  container.append(a);
}