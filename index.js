const backgroundImage = document.getElementById("background-image");
const backgroundFooter = document.getElementById("background-image2")
window.addEventListener("scroll", () => {
  updateBackground();
	backgroundImageFooter();
});

function updateBackground() {
  backgroundImage.style.opacity = 1 - window.pageYOffset / 1200;
	//console.log(window.pageYOffset,1 - window.pageYOffset / 1200)
	backgroundImage.style.backgroundSize = 150- window.pageYOffset / 15 + "%";
}

function backgroundImageFooter(){
	backgroundFooter.style.backgroundSize = 90 + window.pageYOffset / 15 +  "%";
}