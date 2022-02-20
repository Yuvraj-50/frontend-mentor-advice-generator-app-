const adiveId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const btn = document.getElementById("btn");

function newAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adiveId.textContent = `${data.slip.id}`;
      adviceText.textContent = `${data.slip.advice}`;
    });
}

newAdvice();

btn.addEventListener("click", function () {
  newAdvice();
});
