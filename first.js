function randomInteger(min, max) {
    var a = min + Math.random() * (max + 1 - min);
    a = Math.floor(a);
    return a;
	var c = min + Math.random() * (max + 1 - min);
    c = Math.floor(c);
    return c;
  }

x = randomInteger(6, 9);
y = randomInteger(11, 14) ;
var b = y - x;


