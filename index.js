const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const visibility = document.querySelector(".visibility");

let validName = /(\w+ )+/;
let validEmail = /\w+@\w+\.\w{2,5}/;
let validPhone = /\d{10,10}/
let validPassword = /\w{5}/

name.addEventListener("focusout", () => {
  if (validName.test(name.value)) {
  } else {
    alert("failed");
  }
});

email.addEventListener("focusout", () => {
  if (validEmail.test(email.value)) {
  } else {
    alert("Invalid Email");
  }
});

phone.addEventListener("focusout",()=>{
    if(validPhone.test(phone.value)){

    }
    else{
        alert("Invalid Phone Number");
    }
})

password.addEventListener("focusout",()=>{
    if(validPassword.test(password.value)){

    }
    else{
        alert("Invalid Password. It must be at least consist of 5 characters");
    }
})







visibility.addEventListener("click", () => {
  const visible = visibility.querySelector("#visible");
  const invisible = document.createElement("span");
  invisible.className = "material-icons";
  invisible.innerText = "visibility_off";
  invisible.id = "invisible";

  if (visibility.querySelector("#visible") !== null) {
    password.type = "text";

    visibility.replaceChild(invisible, visible);
  } else {
    const invisible2 = visibility.querySelector("#invisible");

    const visible2 = document.createElement("span");
    visible2.className = "material-icons";
    visible2.innerText = "visibility";
    visible2.id = "visible";

    if (visibility.querySelector("#invisible") !== null) {

      visibility.replaceChild(visible2, invisible2);

      password.type = "password";
    }
  }
});
