function checkCode() {
  const input = document.getElementById("codeInput").value.toLowerCase();
  const result = document.getElementById("result");

  if (input === "cybr") {
    result.textContent = "Bravo, hacker! Növbəti səviyyəyə keçdin.";
  } else {
    result.textContent = "Xəta! Yenidən cəhd et.";
  }
}