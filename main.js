const menuBtn = document.querySelector(".menu-icon span");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");

// opens mobile menu when burger menu is pressed
menuBtn.onclick = () => {
	items.classList.add("active");
	menuBtn.classList.add("hide");
	cancelBtn.classList.add("show");
};

// closes mobile menu when cancel button is pressed
cancelBtn.onclick = () => {
	items.classList.remove("active");
	menuBtn.classList.remove("hide");
	cancelBtn.classList.remove("show");
};

// closes mobile menu when section is selected
items.onclick = () => {
	items.classList.remove("active");
	menuBtn.classList.remove("hide");
	cancelBtn.classList.remove("show");
};
