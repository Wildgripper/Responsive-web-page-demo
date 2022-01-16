function moveDiv(screen) {
    if (screen.matches) {
        destination.appendChild(form);
        banner.appendChild(button);

    } else {
        banner.appendChild(form);
        destination.appendChild(button);
    }
}

let smallScreen = window.matchMedia("(max-width: 720px)")
moveDiv(smallScreen)
smallScreen.addListener(moveDiv)

const buttonScroll = document.getElementById("button");
buttonScroll.addEventListener('click', function () {
    let formTitle = document.getElementById("title");
    formTitle.scrollIntoView();
});

function showMessage(input, message, type) {
	
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;

    if (!type) {
        input.style.borderColor = "#dc3545";
    }
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const emailForm = document.querySelector("#signup");

const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

emailForm.addEventListener("submit", function (event) {
	event.preventDefault();
	
	let emailValid = validateEmail(emailForm.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	
	if (emailValid) {
		alert("Thank You for submitting your email!");
	}
});
