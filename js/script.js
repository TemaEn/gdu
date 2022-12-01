// проверка на телефон/пк, если телефон, к бади добавляется класс тач, если пк - класс пк.
const isMobile = {
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	}
};

if (isMobile.iOS()) {
	document.body.classList.add('_iOS');
};