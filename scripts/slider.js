/*
 * Get the image, move to the right using CSS animation if its not at the end, else go back to the beginning
 */

dict={
	"":"One-Two",
	"One-Two":"Two-Three",
	"Two-Three":"Three-Four",
	"Three-Four":"Four-Five",
	"Four-Five":"Five-One",
	"Five-One":"One-Two"
};
//()=>{} is similar to python's lambda
setInterval(()=>{
	ele=document.getElementById("scrolledImage");
	ele.style.animation="1s ease 0s 1 normal forwards running "+dict[ele.style.animation.split(" ").pop()];
	//This is the only order of properties that works for me, and I have no idea why
	//https://www.w3schools.com/cssref/css3_pr_animation.asp
	//https://stackoverflow.com/questions/12991164/maintaining-the-final-state-at-end-of-a-css3-animation
},8000);//call function every 8 seconds