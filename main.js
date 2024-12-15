function open_menu() {
  let verify = false;
  let press = document.getElementById("nav");
  let header = document.getElementById("header");

  if (verify == false) {
    press.style.display = "block";
    header.style.borderRadius = "0px 0 15px 15px";

    verify = true;
  } else {
    press.style.display = "none";
    verify = false;
  }
}

function close_menu() {
  let press = document.getElementById("nav");
  let header = document.getElementById("header");

  press.style.display = "none";
  header.style.borderRadius = "0";
}
