// Initialize Firebase
  var config = {
    apiKey: "AIzaSyADXYGotIADofHF_TlE-TYU-U63L_VAoCw",
    authDomain: "contactform-5a8b6.firebaseapp.com",
    databaseURL: "https://contactform-5a8b6.firebaseio.com",
    projectId: "contactform-5a8b6",
    storageBucket: "contactform-5a8b6.appspot.com",
    messagingSenderId: "295189459323"
  };
  firebase.initializeApp(config);

//reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
	e.preventDefault();

//get values
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

//save message
saveMessage(name, company, email, phone, message);

//show alert
document.querySelector('.alert').style.display = 'block';

//hide alert after 3 seconds
setTimeout(function(){
	document.querySelector('.alert').style.display = 'none';
},3000)
document.getElementById('contactForm').reset();
}
//function to get get form values
function getInputVal(id){
	return document.getElementById(id).value;

}
//save messages to firebase
function saveMessage(name, company, email, phone, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message
	});
}