const hamburguer = document.querySelector(".hamburguer");
const navLinks = document.querySelector(".nav-links");

hamburguer.addEventListener("click", () => {
	navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
	const links = document.querySelectorAll("a[href^='#']");

	links.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			const targetID = this.getAttribute("href");
			const targetElement = document.querySelector(targetID);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 50,
					behavior: "smooth",
				});
			}
		});
	});
});
