console.log('linked')


// MOUSE EVENT ON HOVER from .click()
function myFunction() {
    document.getElementById("myCheck").click();
  }
  // MOUSE EVENT ON HOVER


// Activate click event on keyboard press. t

document.addEventListener('keyup', logKey);

const checkbox = document.getElementById("myCheck")
function logKey(e) {
    document.getElementById("myCheck").click();
}

// not sure why the event doesnt work calling it by name, using checkbox.click() only manually.