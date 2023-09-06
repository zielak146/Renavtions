document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	function addBackground() {
		if (window.scrollY >= 0) {
			nav.classList.add('nav-background');
		} else {
			nav.classList.remove('nav-background');
		}
	}
	allNavItems.forEach((item) =>
		item.addEventListener('click', () => {
			navList.classList.remove('show');
		})
	);

	window.addEventListener('scroll', addBackground);
});

const userName = 'Marek';

if (userName) {
	console.log('Witaj ' + userName + '!');
}

if (userName !== '') {
	console.log('Witaj ' + userName);
}

let hasTicket = false;
let moreThan15Years = true;
let bossFamily = true;

if ((hasTicket && moreThan15Years) || bossFamily) {
	console.log('Can Enter');
} else {
	console.log('Unfortunately not');
}

let age = 71;
if (age <= 9) {
	console.log('Child');
} else if (age <= 18){
  console.log('Still young!');
} else if (age <= 70){
  console.log('Mature');
}else {
  console.log('Wise');
}

