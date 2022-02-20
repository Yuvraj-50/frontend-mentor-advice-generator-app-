const adiveId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const btn = document.getElementById("btn");
const card = document.querySelector("main");

function newAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (!res.ok) throw new Error(`something went wrong ERROR ${res.status}`);
      return res.json();
    })
    .then((data) => {
      adiveId.textContent = `${data.slip.id}`;
      adviceText.textContent = `${data.slip.advice}`;
    })
    .catch((err) => {
      console.error(err.message);
      card.textContent = `${err.message}`;
    });
}

newAdvice();

btn.addEventListener("click", function () {
  newAdvice();
});
