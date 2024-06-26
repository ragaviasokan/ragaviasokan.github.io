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
    image.style.width = "500px";
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

//main.js
/* clicks on the button,toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }
    // Close the dropdown menu 
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    }
    }
    }
    }

    // script.js
function submitForm() {
    // Store data in local storage (customize this based on your form elements)
    var formData = {
        name: document.getElementById("name").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        interests: Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(item => item.value),
        message: document.getElementById("message").value
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

function clearForm() {
    // Clear all input fields
    document.getElementById("user-form").reset();
}

//accessibility
  // Function to change font size
  document.getElementById('fontSize').addEventListener('change', function() {
    var fontSize = this.value;
    document.body.style.fontSize = fontSize;
  });

  // Function to change color scheme
  document.getElementById('colorScheme').addEventListener('change', function() {
    var colorScheme = this.value;
    switch(colorScheme) {
      case 'normal':
        document.body.style.backgroundColor = '#ecf8fa'; // blue background
        document.body.style.color = '#000000'; // Black text
        break;
      case 'protanopia':
        document.body.style.backgroundColor = '#f9f2dc'; // Cream background
        document.body.style.color = '#000000'; // Black text
        break;
      case 'deuteranopia':
        document.body.style.backgroundColor = '#e0f0d4'; // Pale green background
        document.body.style.color = '#000000'; // Black text
        break;
      case 'tritanopia':
        document.body.style.backgroundColor = '#fff8fa'; // Pale pink background
        document.body.style.color = '#000000'; // Black text
        break;
    }
  });

