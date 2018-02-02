function getUserInfo() {
	// Storing all the user input data firstName, lastName, email, phoneNumber
	var firstName = document.getElementById("userFirstName").value
	var lastName = document.getElementById("userLastName").value
	var email = document.getElementById("userEmailInput").value
	var phone = document.getElementById("userPhoneInput").value
	// Storing the user input for birth, color, and gender
	var genderElements = document.getElementsByClassName("userGender")
	var birthElements = document.getElementsByClassName("continentOfBirth")
	var colorElements = document.getElementsByClassName("favoriteColor")
	// creating variables to store user input that will be used later in the function
	var userGender, userBirth, userColor
	// ------------------------------------------------------------
	// =========IF USER FAILS TO PUT IN REQUIRED INFO==============
	// ------------------------------------------------------------
	// FIRST NAME making sure the user puts info in the input box
	if(firstName == "") {
		// Adding classes to the inputs if the user fails to enter required information
		userFirstName.className = "failure"
		// updating the text content of the input box
		userFirstName.placeholder = "Please enter your first name!"
	} 
	// LAST NAME making sure the user puts info in the input box
	if(lastName == "") {
		// Adding classes to the inputs if the user fails to enter required information
		userLastName.className = "failure"
		// updating the text content of the input box
		userLastName.placeholder = "Please enter your last name!"
	}
	// EMAIL making sure the user puts info in the input box
	console.log(email)
	if(email == "") {
		// Adding classes to the inputs if the user fails to enter required information
		userEmailInput.className = "failure"
		// updating the text content of the input box
		userEmailInput.placeholder = "Please enter your email!"
	}
	// FIRST NAME making sure the user puts info in the input box
	console.log(phone)
	if(phone == "") {
		// Adding classes to the inputs if the user fails to enter required information
		userPhoneInput.className = "failure"
		// updating the text content of the input box
		userPhoneInput.placeholder = "Please enter your phone number!"
		
	}
	// GENDER
	// Looping through the radio answers for gender
	for(var i = 0; i < genderElements.length; i++) {
		// storing the selected user input in a variable
		if(genderElements[i].checked) {
			userGender = genderElements[i].value
		}
	}
	// If the user didn't select a radio answer for the gender
	if(userGender == undefined) {
		genderH5.className = "textFailure"
	}
	// BIRTH PLACE
	// Looping through the radio answers for continent of birth
	for(var i = 0; i < birthElements.length; i++) {
		// storing the selected user input in a variable
		if(birthElements[i].checked) {
			userBirth = birthElements[i].value
		}
	}
	// If the user didn't select a radio answer for the gender
	if(userBirth == undefined) {
		birthH5.className = "textFailure"
	}
	// COLOR
	// Looping through the radio answers for color
	for(var i = 0; i < colorElements.length; i++) {
		// storing the selected user input in a variable
		if(colorElements[i].checked) {
			userColor = colorElements[i].value
		}
	}
	// If the user didn't select a radio answer for the gender
	if(userColor == undefined) {
		colorH5.className = "textFailure"
		// stopping the function if failure to enter all correct info
		return
	}
	// -----------------------------------------------------------------------
	// =========IF USER IS A SUCCESS IN PUTTING IN REQUIRED INFO==============
	// -----------------------------------------------------------------------
	// adding a class to turn the text green
	results.className = "success"
	// adding the text content to the empty div to let the user know they did everything correctly
	results.textContent = "Success! Creating your new profile!"
	// creating the object with the user input data
	var newUserProfile = {
		name: firstName + " " + lastName,
		gender: userGender,
		email: email,
		phone: phone,
		birth: userBirth,
		color: userColor
	}
	console.log(newUserProfile)
	// displaying the new profile after showing the success for 2 seconds
	setTimeout(function() {
		displayProfile(newUserProfile)
	}, 2000)
}
// function to display the new profile information
function displayProfile(newUserProfile) {
	// selecting the empty h4 and h6 tags in my html and storing them as variables
	var newUserName = document.getElementById("userName")
	var newUserGender = document.getElementById("userGender")
	var newUserEmail = document.getElementById("userEmail")
	var newUserPhone = document.getElementById("userPhone")
	var newUserBirth = document.getElementById("userBirth")
	var newUserColor = document.getElementById("userColor")

	// changing the text in the elements to say the user input
	newUserName.innerText = "Welcome to your new profile " + newUserProfile.name
	newUserGender.innerText = "Gender: " + newUserProfile.gender
	newUserEmail.innerText = "Email: " + newUserProfile.email
	newUserPhone.innerText = "Phone Number: " + newUserProfile.phone
	newUserBirth.innerText = "Continent of birth: " + newUserProfile.birth
	newUserColor.innerText = "Favorite Color: " + newUserProfile.color
	// hiding the form above
	document.getElementById("userForm").style.display = "none"
}
document.getElementById("sendUserInput").addEventListener("click", getUserInfo, false)