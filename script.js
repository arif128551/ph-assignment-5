// Navigate to the blog page
const discoverNewToday = document.getElementById("discover-new-today");
if (discoverNewToday) {
	discoverNewToday.addEventListener("click", function () {
		window.location.href = "blogs.html";
	});
}

const backToDesk = document.getElementById("back-to-desk");
if (backToDesk) {
	backToDesk.addEventListener("click", function () {
		window.location.href = "index.html";
	});
}

// changing background color of the click of color button
function randomColor() {
	let randomNumber = Math.floor(Math.random() * 256 * 256 * 256);
	let hexString = randomNumber.toString(16);
	return `#${hexString}`;
}

document.getElementById("color-btn").addEventListener("click", function () {
	document.body.style.backgroundColor = randomColor();
});
