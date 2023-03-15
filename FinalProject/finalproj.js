const homeBtn = document.getElementById("homebtn");
const sendBtn = document.getElementsByClassName("sendbtn");

homeBtn.addEventListener("click", () => {
  window.location.href = "https://google.com";
});

document.getElementById("openModal").addEventListener("click", OpenModal);
document.getElementById("closeModal").addEventListener("click", OpenModal);

function OpenModal() {
  if (document.getElementById("container-modal").classList.contains("d-none")) {
    console.log("Merge");
    document.getElementById("container-modal").classList.remove("d-none");
  } else {
    document.getElementById("container-modal").classList.add("d-none");
  }
}

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function validateEmail(email) {
  // Email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  // Password regex pattern
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordPattern.test(password);
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  const emailInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  if (!validateEmail(emailInput.value)) {
    alert("Invalid email");
    event.preventDefault(); // Prevent form submission
  }
  if (!validatePassword(passwordInput.value)) {
    alert("Invalid password");
    event.preventDefault(); // Prevent form submission
  }
});
//Caroussel
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 5 seconds
}
