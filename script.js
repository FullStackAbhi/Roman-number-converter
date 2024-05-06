let convertBtn = document.getElementById("convert-btn");
let userInput = document.getElementById("number");
let roman = document.getElementById("output");
convertBtn.addEventListener("click", function () {
  roman.classList.remove("hide");
  roman.innerHTML = stringToRoman(userInput.value);
  userInput.value = "";

  function stringToRoman(num) {
    if (num == "") {
      return "Please enter a valid number";
    }
    if (num <= 0) {
      return "Please enter a number greater than or equal to 1";
    }
    if (num >= 4000) {
      return "Please enter a number less than or equal to 3999";
    }
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let result = "";

    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += symbols[i];
        num -= values[i];
      }
    }

    return result;
  }
});
