// Copyright 2015-2017 Reid Netterville III

"use strict";

(function() {
  var f = [];
  for (var n = 0; n < 49; n++) {
    f.push(Math.pow(2, n / 12).toFixed(15) * 1);
  }
  var z = document.getElementById("zhu");
  z.textContent = f.join("\n");
})();

