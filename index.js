function getLottoNumbers() {
  const winners = [];
  for (let i = 0; i < 6; i++) {
    winners.push(Math.round(Math.random() * 100));
  }
  return winners;
}

function getWinningNumbersHtml() {
  return getLottoNumbers()
    .map(function (num) {
      return `<div class="number">${num}</div>`;
    })
    .join("");
}

document.getElementById("winning-numbers").innerHTML = getWinningNumbersHtml();
