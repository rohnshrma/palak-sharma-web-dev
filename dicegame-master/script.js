const heading = document.querySelector("h1");
const dice_1 = document.querySelector(".img1");
const dice_2 = document.querySelector(".img2");
let rollTimer; // holds the timeout that removes the "roll" class

function playGame() {
  const r1 = Math.floor(Math.random() * 6) + 1;
  const r2 = Math.floor(Math.random() * 6) + 1;

  console.log(r1, r2);

  // remove + force a reflow so the animation restarts even on fast repeated presses
  dice_1.classList.remove("roll");
  dice_2.classList.remove("roll");
  void dice_1.offsetWidth;

  dice_1.classList.add("roll");
  dice_2.classList.add("roll");

  clearTimeout(rollTimer); // cancel the previous roll's cleanup so it can't cut this one short
  rollTimer = setTimeout(() => {
    dice_1.classList.remove("roll");
    dice_2.classList.remove("roll");
  }, 800); // matches the 0.8s animation in styles.css

  dice_1.setAttribute("src", `dice${r1}.png`);
  dice_2.setAttribute("src", `dice${r2}.png`);

  if (r1 > r2) {
    heading.innerText = "Player 1 Wins!";
  } else if (r2 > r1) {
    heading.innerText = "Player 2 Wins!";
  } else {
    heading.innerText = "Draw!";
  }
}

heading.addEventListener("click", playGame);
document.addEventListener("keydown", (e) => {
  if (e.key === " ") playGame();
});
