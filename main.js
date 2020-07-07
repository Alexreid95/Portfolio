const menuBtn = document.querySelector(".menu-icon span");
const cancelBtn = document.querySelector(".cancel-icon");
const navItems = document.querySelector(".nav-items");
const downloadCVButton = document.querySelector(".home__button");

// Opens mobile menu when burger menu is pressed
menuBtn.onclick = () => {
	navItems.classList.add("active");
	menuBtn.classList.add("hide");
	cancelBtn.classList.add("show");
};

// Closes mobile menu when cancel button is pressed
cancelBtn.onclick = () => {
	navItems.classList.remove("active");
	menuBtn.classList.remove("hide");
	cancelBtn.classList.remove("show");
};

// Closes mobile menu when section is selected
navItems.onclick = () => {
	navItems.classList.remove("active");
	menuBtn.classList.remove("hide");
	cancelBtn.classList.remove("show");
};

// Adds animation for Download button CSS
downloadCVButton.onclick = function (e) {
	let x = e.clientX - e.target.offsetLeft;
	let y = e.clientY - e.target.offsetTop;
	let ripple = document.createElement("span");
	ripple.style.left = `${x}px`;
	ripple.style.top = `${y}px`;
	downloadCVButton.appendChild(ripple);
	setTimeout(function () {
		ripple.remove();
	}, 500);
};
