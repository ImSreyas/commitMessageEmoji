const emojiArr = ["✨", "💄", "🚀", "⚙️", "📱", "🔥", "🐞", "🚧", "🔒"];
const buttons = document.querySelectorAll(".emoji-btn");
buttons.forEach((btn, index) => {
  btn.innerText = emojiArr[index];

  btn.addEventListener("click", (e) => {
    navigator.clipboard.writeText(emojiArr[index]);
  });
});
