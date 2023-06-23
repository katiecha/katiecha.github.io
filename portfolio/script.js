const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active')
})

//create a variable to monitor the input checkbox
const colorSwitch = document.getElementById("input-color-switch");

//when the input is clicked verify the state of the checkbox
colorSwitch.addEventListener("click", checkMode);

//1. see which state the checkbox is in
//2. if it is checked enable the dark mode by adding the class
//3. if it is not checked remove dark mode by removing the class
function checkMode() {
  console.log("checking...");
  if (colorSwitch.checked) {
    console.log("light on");
    lightModeOn();
  } else {
    console.log("light off");
    lightModeOff();
  }
}

function lightModeOn() {
  document.body.classList.add("light-mode");
}

function lightModeOff() {
  document.body.classList.remove("light-mode");
}
