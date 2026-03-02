// Highlight field on mouse hover
function highlight(element) {
    element.style.border = "2px solid blue";
}

// Remove highlight
function removeHighlight(element) {
    element.style.border = "2px solid #ccc";
}

// Validate name (Only letters allowed)
function validateName(event) {
    let char = String.fromCharCode(event.keyCode);

    if (!/^[a-zA-Z ]+$/.test(char)) {
        event.preventDefault();
        document.getElementById("nameError").innerText =
            "Only letters allowed!";
    } else {
        document.getElementById("nameError").innerText = "";
    }
}

// Validate email basic check
function validateEmail(event) {
    let emailField = document.getElementById("email");
    let email = emailField.value;

    if (email.length > 0 && !email.includes("@")) {
        document.getElementById("emailError").innerText =
            "Email must contain @";
    } else {
        document.getElementById("emailError").innerText = "";
    }
}

// Submit form with confirmation
function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    alert("Thank you for your feedback, " + name + "!");
    document.getElementById("feedbackForm").reset();
}