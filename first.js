function randomInteger(min, max) {
    var a = min + Math.random() * (max + 1 - min);
    a = Math.floor(a);
    return a;
	var c = min + Math.random() * (max + 1 - min);
    c = Math.floor(c);
    return c;
  }
document.write("a = ");
document.write(x = randomInteger(6, 9) );
document.write("<br/>");
document.write("a+b = ");
document.write(y = randomInteger(11, 14) );
document.write("<br/>");

var b = y - x;
document.write("b = ");
document.write(b);

