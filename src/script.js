//LINE 1
document.getElementById('1').onclick = function () {
    document.querySelector('.inpt').textContent += "~";
}
document.getElementById('2').onclick = function () {
    document.querySelector('.inpt').textContent += "1";
}
document.getElementById('3').onclick = function () {
    document.querySelector('.inpt').textContent += "2";
}
document.getElementById('4').onclick = function () {
    document.querySelector('.inpt').textContent += "3";
}
document.getElementById('5').onclick = function () {
    document.querySelector('.inpt').textContent += "4";
}
document.getElementById('6').onclick = function () {
    document.querySelector('.inpt').textContent += "5";
}
document.getElementById('7').onclick = function () {
    document.querySelector('.inpt').textContent += "6";
}
document.getElementById('8').onclick = function () {
    document.querySelector('.inpt').textContent += "7";
}
document.getElementById('9').onclick = function () {
    document.querySelector('.inpt').textContent += "8";
}
document.getElementById('10').onclick = function () {
    document.querySelector('.inpt').textContent += "9";
}
document.getElementById('11').onclick = function () {
    document.querySelector('.inpt').textContent += "0";
}
document.getElementById('12').onclick = function () {
    document.querySelector('.inpt').textContent += "-";
}
document.getElementById('13').onclick = function () {
    document.querySelector('.inpt').textContent += "+";
}
document.getElementById('back').onclick = function () {
    let str = document.querySelector('.inpt').textContent;
    let arr = str.split('',);
    arr.pop();
    arr = arr.join('');
    document.querySelector('.inpt').textContent = arr;
}
document.getElementById('tab').onclick = function () {
    document.querySelector('.inpt').textContent += " ";
}


//LINE 2
document.getElementById('14').onclick = function () {
    document.querySelector('.inpt').textContent += "q";
}
document.getElementById('15').onclick = function () {
    document.querySelector('.inpt').textContent += "w";
}
document.getElementById('16').onclick = function () {
    document.querySelector('.inpt').textContent += "e";
}
document.getElementById('17').onclick = function () {
    document.querySelector('.inpt').textContent += "r";
}
document.getElementById('18').onclick = function () {
    document.querySelector('.inpt').textContent += "t";
}
document.getElementById('19').onclick = function () {
    document.querySelector('.inpt').textContent += "y";
}
document.getElementById('20').onclick = function () {
    document.querySelector('.inpt').textContent += "u";
}
document.getElementById('21').onclick = function () {
    document.querySelector('.inpt').textContent += "i";
}
document.getElementById('22').onclick = function () {
    document.querySelector('.inpt').textContent += "o";
}
document.getElementById('23').onclick = function () {
    document.querySelector('.inpt').textContent += "p";
}
document.getElementById('24').onclick = function () {
    document.querySelector('.inpt').textContent += "[";
}
document.getElementById('25').onclick = function () {
    document.querySelector('.inpt').textContent += "]";
}


//LINE 3
document.getElementById('caps').onclick = function () {
    document.querySelector('.inpt').textContent += "";
}
document.getElementById('26').onclick = function () {
    document.querySelector('.inpt').textContent += "a";
}
document.getElementById('27').onclick = function () {
    document.querySelector('.inpt').textContent += "s";
}
document.getElementById('28').onclick = function () {
    document.querySelector('.inpt').textContent += "d";
}
document.getElementById('29').onclick = function () {
    document.querySelector('.inpt').textContent += "f";
}
document.getElementById('30').onclick = function () {
    document.querySelector('.inpt').textContent += "g";
}
document.getElementById('31').onclick = function () {
    document.querySelector('.inpt').textContent += "h";
}
document.getElementById('32').onclick = function () {
    document.querySelector('.inpt').textContent += "j";
}
document.getElementById('33').onclick = function () {
    document.querySelector('.inpt').textContent += "k";
}
document.getElementById('34').onclick = function () {
    document.querySelector('.inpt').textContent += "l";
}
document.getElementById('35').onclick = function () {
    document.querySelector('.inpt').textContent += ";";
}
document.getElementById('36').onclick = function () {
    document.querySelector('.inpt').textContent += "'";
}
document.getElementById('37').onclick = function () {
    document.querySelector('.inpt').textContent += "|";
}

//LINE 3
document.getElementById('38').onclick = function () {
    document.querySelector('.inpt').textContent += "z";
}
document.getElementById('39').onclick = function () {
    document.querySelector('.inpt').textContent += "x";
}
document.getElementById('40').onclick = function () {
    document.querySelector('.inpt').textContent += "c";
}
document.getElementById('41').onclick = function () {
    document.querySelector('.inpt').textContent += "v";
}
document.getElementById('42').onclick = function () {
    document.querySelector('.inpt').textContent += "b";
}
document.getElementById('43').onclick = function () {
    document.querySelector('.inpt').textContent += "n";
}
document.getElementById('44').onclick = function () {
    document.querySelector('.inpt').textContent += "m";
}
document.getElementById('45').onclick = function () {
    document.querySelector('.inpt').textContent += ",";
}
document.getElementById('46').onclick = function () {
    document.querySelector('.inpt').textContent += ".";
}
document.getElementById('47').onclick = function () {
    document.querySelector('.inpt').textContent += "/";
}
document.getElementById('del').onclick = function () {
    document.querySelector('.inpt').textContent = "";
}

//LINE 4
document.getElementById('space').onclick = function () {
    document.querySelector('.inpt').textContent += " ";
}
document.getElementById('enter').onclick = function () {
    document.querySelector('.inpt').textContent += "";
}