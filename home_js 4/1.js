// Task 1

var div = document.getElementsByTagName('div');


for (var i=0; i<div.length; i++) {
	div[i].onclick = fillDiv;
}

function fillDiv() {
	this.style.background = 'red';
	this.getElementsByTagName('p')[0].style.display = 'block';
}


// Task 2


var img = document.getElementsByTagName('img');

for (var i=0; i<img.length; i++) {
	img[i].onclick = clickimg;
} 

function clickimg () {
	this.style.boxShadow = "10px 20px 30px grey";
}


// Task 3

document.getElementById('num').onclick = num;

function num () {
	var p1 = document.getElementsByClassName('p');


for (var i=0 ; i<p1.length; i++) {
	p1[i].innerHTML = i+1 + ') ' + p1[i].innerHTML;
}

}


// Task 4

document.getElementById('click1').onclick = click1;
document.getElementById('btn1').onclick = btn1;
document.getElementById('btn2').onclick = btn2;
var score = 0;

function btn1 () {
	score++;
	click1.innerHTML = score;
}

function btn2 () {
	score++;
	click1.innerHTML = score;
}


// Task 5


document.getElementById('stepen').onclick = stepen;

function stepen () {
	var inp1 = document.getElementById('inp1').value;
	var inp2 = document.getElementById('inp2').value;
	alert(Math.pow(inp1, inp2));
}

// Task 6

document.getElementById('findteg').onclick = fteg;

function fteg () {
	var teg1 = document.getElementById('teg').value;
	var newteg1 = document.getElementsByTagName(teg1);
	for (var i of newteg1) {
		i.style.textDecoration = 'underline';
	}

}

// Task 7


document.getElementById('b7').onclick = b7;
	function b7 () {
		var a7 = document.getElementById('a7').value;
		if (a7 <= 16) {
			alert ('Вы молоды');
		}
		else {
			alert('Добро пожаловать')
		}
	}


	// Task 8

	document.getElementById('b8').onclick = b8;
	function b8 () {
		var a8 = document.getElementById('a8').value;
		// if (a8 == '' || typeof a8 == 'undefined' || a8 == null) {
		// 	alert ('Введите возраст');
		// }
		// else {
		if (a8 < 16) {
			alert ('Вы молоды');
		}
		else if (a8 >= 16){
			alert('Добро пожаловать')
		}
		else {
			alert('Введите возраст')
		}
		// }
	}


	// Task 9


var m = [2, 4, 6];



function masOut() {
	var p = document.getElementById('new');
	var str = "";
	for (var i=0; i<m.length; i++) {
		str += i + ' --- ' + m[i] + '<br>';
	}
	p.innerHTML = str;
}

masOut();

document.getElementById('p0').onclick = masOut2;
function masOut2 () {
	var i1 = document.getElementById('i1').value;
	var i2 = document.getElementById('i2').value;
	m.splice(i1, 0, i2);
	masOut ();
}

document.getElementById('p00').onclick = k00;

function k00 () {
		var p1 = document.getElementById('new2');
		new2.innerHTML =  m.length;
	}


// Task 10



document.getElementById('b10').onclick = b10;
	function b10 () {
		var a10 = document.getElementById('a10').value;
			if (a10 < 7 ) {
				return c10.innerHTML = 'Число меньше 7';
			}

			else if (a10 == 8) {
				return c10.innerHTML = 'Число 8';
			
			}

			else if (a10 == 9) {
				return c10.innerHTML = 'Число 9';
			
			}


			else {
				return c10.innerHTML = a10*a10;
			}

	}


	// Task 11
	var number = Math.floor(10*Math.random()) + 1;
	console.log(number);
	var count1 = 3;

	document.getElementById('b11').onclick = b11;
		function b11 () {
			if (count1>0) {
				var a11 = document.getElementById('a11').value;
				var c11 = document.getElementById('c11');

				if (number == a11) {
					c11.innerHTML = 'Победа';
					d11.innerHTML = 'Осталось Попыток - ' + count1;
					location.reload();
				}
				else if (number < a11) {
					c11.innerHTML = 'Перелет';
					d11.innerHTML = 'Осталось Попыток - ' + count1;
				}

				else if (number > a11) {
				c11.innerHTML = 'Недолет';
				d11.innerHTML = 'Осталось Попыток - ' + count1;
				}
			count1 = count1 - 1 ;
			}
			else {
				alert('Вы проиграли');
				location.reload();
			}
		}
