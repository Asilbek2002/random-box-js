const section = document.querySelector("section");
const input = document.querySelector("#numInput");
const box = document.querySelector(".box");
const fps = 60;

section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

function createDiv() {
  for (let i = 1; i <= input.value; i++) {
    const logo = document.createElement("div");
    logo.className = "logo";
    section.appendChild(logo);

    logo.style.background = randomColor();
    logo.style.borderRadius = getRandomBorderRadius() + "px";

    let xPosition = getRandomNumberBetween();
    let yPosition = getRandomNumberBetween();
    let xSpeed = getRandomSpeed();
    let ySpeed = getRandomSpeed();

    function uptade() {
      logo.style.left = xPosition + "px";
      logo.style.bottom = yPosition + "px";
    }

    setInterval(() => {
      if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
        xSpeed = -xSpeed;
        logo.style.background = randomColor();
        logo.style.borderRadius = getRandomBorderRadius() + "px";
      }

      if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
        ySpeed = -ySpeed;
        logo.style.background = randomColor();
        logo.style.borderRadius = getRandomBorderRadius() + "px";
      }

      xPosition += xSpeed;
      yPosition += ySpeed;

      uptade();
    }, 1000 / fps);
  }

  deleteBtnInput();
}

function randomColor() {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8).toUpperCase();
  return color;
}

function getRandomNumberBetween() {
  return Math.random() * (400 - 1) + 1;
}

function getRandomSpeed() {
  return Math.random() * (15 - 3) + 3;
}

function getRandomBorderRadius() {
  return Math.random() * (100 - 5) + 5;
}

function deleteBtnInput() {
  box.remove();
}
