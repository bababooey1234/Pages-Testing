//10 seconds after the page has loaded, if cookies haven't been accepted, show cookies popup.
//When allow clicked, don't show cookies popup ever again, and fade out the popup.
//To re-enable the popup, run localStorage.removeItem("cookiesaccepted") from the devtools console.
//This doesn't use cookie, just localStorage, because cookies can't be used on local files
setTimeout(()=>{/*()=>{} is basically a python lambda*/
	if(!window.localStorage['cookiesaccepted']){/*if localStorage doesn't have a value for cookiesaccepted*/
		elem=document.getElementById("cookiespopup");
		elem.style.display="block";
		elem.style.animation="slidein 1s forwards";
	}
},10000);

function onbuttonclick(accepted){/*when accept or deny is pressed*/
	elem=document.getElementById("cookiespopup");
	if(accepted)
		window.localStorage['cookiesaccepted']=true;
	elem.style.top="90vh";/*otherwise it snaps back to 100vh*/
	elem.style.animation="fadeout 1s forwards";
	setTimeout(()=>{elem.style.display="none";},1000);/*do it in 1 seconds time*/
}