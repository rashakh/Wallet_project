var techno = [];
var science = [];
var physics = [];
var history = [];
var anime = [];
var series =[];
var movie = [];

function on_enter(input){
	if(!/\S/.test(input.value) && event.key == 'Enter'){
		alert("U should Enter input Rasha");
		document.getElementById("input").focus();
			}
	else if(event.key == "Enter"){
		if(selcted_category() == "Select")
		{
			alert("U should select category Rasha")
			document.getElementById("selcted").focus();
		}
		else{
			alert("Your input has been saved "+input.value);
		}
	}
}

function selcted_category(){
	var care = document.getElementById("selcted").value;
   document.getElementById("demo").innerHTML = care // just for check
    return care
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var login = document.getElementById("Login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
login.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function enctypt(password){
	if(event.key == "Enter"){
			var hash = CryptoJS.MD5(password.value);
			if(hash == "95e4zhf9f6796cbci720b54aca3928fa"){
				window.open("../wallet.html");
				location.reload();
			}
			else
				document.getElementById("err").innerHTML = "Not right, try again";	
		}
}