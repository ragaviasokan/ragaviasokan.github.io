// a. Prompt for User Name
function promptForName() {
    var userName = prompt("Please enter your name:");
    if (userName !== null && userName !== "") {
        document.getElementById("welcome-message").innerHTML = "Welcome, " + userName + "!";
    } else {
        document.getElementById("welcome-message").innerHTML = "Welcome!";
    }
}

// b. Enlarge Image on Click
function enlargeImage() {
    var image = document.getElementById("my-image");
    image.style.width = "500px"; // Adjust the size as needed
}

// c. Customized Navigation Menu
function navigateToPage(page) {
    alert("Navigating to " + page);
}

// d. Onmouseover/Onmouseout Event for Nav Items
function changeColorOnHover(element, color) {
    element.style.backgroundColor = color;
}

function resetColorOnOut(element) {
    element.style.backgroundColor = "";
}