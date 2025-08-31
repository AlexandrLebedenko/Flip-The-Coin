const coin = document.querySelector(".coin");
const result = document.querySelector(".result");
const button = document.querySelector(".button");
const shadow = document.querySelector(".coin-shadow");

// Function of rotation
function flipCoin() {
  coin.classList.remove("flip-head", "flip-tail", "spin");
  void coin.offsetWidth; // Forge of transfusion
  coin.classList.add("spin");
  shadow.classList.add("spin");

  // after 2 seconds (duration of animation) - select the side
  setTimeout(() => {
    const isHead = Math.random() < 0.5;
    coin.classList.remove("spin");
    shadow.classList.remove("spin");
    coin.classList.add(isHead ? "flip-head" : "flip-tail");
    result.textContent = isHead ? "Head" : "Tail";
  }, 3000);
}

// Events: by button and click on the coin
button.addEventListener("click", flipCoin);
coin.addEventListener("click", flipCoin);
