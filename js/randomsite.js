let randombtn = document.getElementById('random');

randombtn.addEventListener('click', randomSite);

var urls = new Array();
urls[0] = 'alfredo.html';
urls[1] = 'pesto.html';
urls[2] = 'carbonara.html';
urls[3] = 'meringue.html';
urls[4] = 'curry.html';
urls[5] = 'scones.html';

function randomSite() {
	var i = Math.floor(Math.random() * urls.length);
	window.location = urls[i];
}
