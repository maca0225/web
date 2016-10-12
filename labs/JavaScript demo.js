JavaScript demo.js

// When "inspecting" webpages go to sources tab to see the JavaScript 
 alert("Hey there");
 // you put quotes around anything that is a string // 
 // *GLOBAL variables - I can use these variables anywhere in my javascript // 

 var firstname = "Jane";
 var lastname = "Smith";

 console.log(firstName + " " + lastname);

function addGreeting(){
	var headerBox = 
	document.getElementById('greeting');

	headerBox.innerHTML = "Hey there " 
	+ firstname + " " + lastname + "!"; 
}
// it matters a lot what letters are capital and which are lowercase // 
// every line in JS needs to end in a semicolon (;) // 

////// FORUM STUFF ////

function getForumData(){

	//setup connections to html ids //
	var fNameField = 
	document.getElementById('fName');
	var lNameField = 
	document.getElementById('lName');

	// Next have to get values from input fields // 
	// make a new variable to hold the values //
	var fNameData = fNameField.value;
	var lNameData = lNameField.value;

	//title thus toether with a message
	var message = "Your name is" +
		fNameData + " " + lNameData + 
		"! Thanks for visiting my page!"; 

	console.log(message);

	var formMsg = document.getElementById('formResponse');

	formMsg.innerHTML = message; 
}







