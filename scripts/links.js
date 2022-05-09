//there's probably a less verbose way to do this but it does work
//this code handles switching between the sources and content tabs, and the paywall box.

//When the sources link is clicked, hide the content tab and show the sources tab
function sourcesclicked(){
	clink=document.getElementById("contentlink");
	slink=document.getElementById("sourceslink");
	
	document.getElementById("page_content_container").style.display="none";
	document.getElementsByClassName("sources_container")[0].style.display="block";
	
	clink.classList.remove("linkinactive");
	clink.classList.add("linkactive");
	slink.classList.remove("linkactive");
	slink.classList.add("linkinactive");
	
	clink.href="javascript:void(contentclicked())";
	slink.removeAttribute("href");
}
//When the content link is clicked, hide the sources tab and show the content tab
function contentclicked(){
	clink=document.getElementById("contentlink");
	slink=document.getElementById("sourceslink");
	
	document.getElementById("page_content_container").style.display="block";
	document.getElementsByClassName("sources_container")[0].style.display="none";
	
	slink.classList.remove("linkinactive");
	slink.classList.add("linkactive");
	clink.classList.remove("linkactive");
	clink.classList.add("linkinactive");
	
	slink.href="javascript:void(sourcesclicked())";
	clink.removeAttribute("href");
}
//When the paywall image is clicked
function paywallclicked(){
	document.getElementById("paywall").style.display="none";
	document.getElementById("bitcoin").style.display="block";
	setInterval(loadanim,1000);//call loadanim once every second.
}

//cycles from text. -> text.. -> text... -> text.
//only hides dots so they take up the same width; doesn't remove them.
//this is probably the dumbest way possible to do this
function loadanim(){
	ele=document.getElementById("ellipsis");
	ele.innerHTML = {
		"...":".<span id=\"hide_ellipsis\">..</span>",
		".<span id=\"hide_ellipsis\">..</span>":"..<span id=\"hide_ellipsis\">.</span>",
		"..<span id=\"hide_ellipsis\">.</span>":"..."
	}[ele.innerHTML];//getting value from dictionary
}

//Whenever a link that goes to a section of the page is clicked, scroll up a bit so the title isn't hidden by the menu bar
//https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 50);
});
//not perfect but good enough