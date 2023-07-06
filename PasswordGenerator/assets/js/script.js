// Assignment Code
generateBtn = document.querySelector('#generate');

//Defined the function of generate password and gave it a variable list of characters to break into options later for the user
function generatePassword() {
	var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
	var specialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
	var numeric ="0123456789"
	var multiSelect = "";

	// Criteria prompts that will give the user the options for the generated password
	var uppercase = confirm("Would you like to have uppercase letters?")
	var lowercase = confirm("Would you like to have lowercase letters?")
	var symbols = confirm("Would you like to have special characters?")
	var numbers = confirm("Would you like to have numbers?")
	var keyLength = prompt("Password must be between 8 and 128 characters. Click OK to continue");
	
	//making sure user follows criteria for the password length and they use numbers
	if (keyLength < 8 || keyLength > 128) {
  		alert("Your password does not meet the criteria");
  		keyLength = prompt("Password must be between 8 and 128 characters in length.");
	}
	//This will give an error of they press cancel on the four options
	if (uppercaseABC === false && lowercaseABC === false && specialSymbols === false && numeric === false) {
		return "Your passwords does not meet the password criteria";
	};

	// The will validate the user character options base in the Criteria prompts section
	if (lowercase) multiSelect += lowercaseABC;
	if (uppercase) multiSelect += uppercaseABC;
	if (numbers) multiSelect += numeric;
	if (symbols) multiSelect += specialSymbols;
	//This formula will generate the password and will be written to the next function
	let password = "";
	for (let i = 0; i < keyLength; i++) {
  		let rng = Math.floor(Math.random() * multiSelect.length);
  		password = password + multiSelect[rng];
	}
	return password;
};



// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);