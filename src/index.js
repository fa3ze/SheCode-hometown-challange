function requestInfo() {
  let name = prompt("what is your name? 😊");
  let ask = prompt(
    "Hello" + " " + name + " " + "do you want to visit Isfahan?😎"
  );
  ask = ask.toLowerCase();
  ask = ask.trim();
  if (ask === "yes") {
    let emailrequest = prompt("what is your email adress?");
    alert("I will e-mail you some amazing travel agencies! 💌");
  } else {
    alert("Thanks anyway!💞");
  }
}

let infoButton = document.querySelector(".btn-light");
infoButton.addEventListener("click", requestInfo);
