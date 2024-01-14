let input = document.getElementById("calculate");
let plus = document.querySelector("button.plus");
let minus = document.querySelector("button.minus");
let divide = document.querySelector("button.divide");
let multipy = document.querySelector("button.multipy");
let equal = document.querySelector("button.equal");

let one = document.querySelector("button.one");
let two = document.querySelector("button.two");
let three = document.querySelector("button.three");
let four = document.querySelector("button.four");
let five = document.querySelector("button.five");
let six = document.querySelector("button.six");
let seven = document.querySelector("button.seven");
let eight = document.querySelector("button.eight");
let nine = document.querySelector("button.nine");
let zero = document.querySelector("button.zero");
let dot = document.querySelector("button.dot");
let clear = document.querySelector("button.C");

let button = document.querySelectorAll("button");
console.log(button);

let count = 0;
button.forEach((elem) => {
  elem.addEventListener("click", function () {
    let lastChar = input.value.charAt(input.value.length - 1);
    switch (elem.className) {
      case "one":
        input.value += `1`;
        break;
      case "two":
        input.value += `2`;
        break;
      case "three":
        input.value += `3`;
        break;
      case "four":
        input.value += `4`;
        break;
      case "five":
        input.value += `5`;
        break;
      case "six":
        input.value += `6`;
        break;
      case "seven":
        input.value += `7`;
        break;
      case "eight":
        input.value += `8`;
        break;
      case "nine":
        input.value += `9`;
        break;
      case "zero":
        if (input.value !== "") {
          input.value += `0`;
        }
        break;

      case "clear":
        input.value = "";
        count = 0;
        break;

      case "dot":
        count++;
        if (
          lastChar !== "." &&
          lastChar !== "+" &&
          lastChar !== "-" &&
          lastChar !== "*" &&
          lastChar !== "^" &&
          lastChar !== "%" &&
          lastChar !== "/" &&
          input.value !== "" &&
          count == 1
        ) {
          input.value += `.`;
        }
        break;

      case "plus":
        if (
          lastChar !== "." &&
          lastChar !== "+" &&
          lastChar !== "-" &&
          lastChar !== "*" &&
          lastChar !== "^" &&
          lastChar !== "%" &&
          lastChar !== "/"
        ) {
          count = 0;
          input.value += `+`;
        }
        break;

      case "minus":
        if (
          lastChar !== "." &&
          lastChar !== "+" &&
          lastChar !== "-" &&
          lastChar !== "*" &&
          lastChar !== "^" &&
          lastChar !== "%" &&
          lastChar !== "/"
        ) {
          count = 0;
          input.value += `-`;
        }
        break;

      case "multipy":
        if (
          lastChar !== "." &&
          lastChar !== "+" &&
          lastChar !== "-" &&
          lastChar !== "*" &&
          lastChar !== "^" &&
          lastChar !== "%" &&
          lastChar !== "/" &&
          input.value !== ""
        ) {
          count = 0;
          input.value += `*`;
        }
        break;

      case "divide":
        if (
          lastChar !== "." &&
          lastChar !== "+" &&
          lastChar !== "-" &&
          lastChar !== "*" &&
          lastChar !== "^" &&
          lastChar !== "%" &&
          lastChar !== "/" &&
          input.value !== ""
        ) {
          count = 0;
          input.value += `/`;
        }
        break;

      case "power":
        if (
          lastChar !== "." &&
          lastChar !== "+" &&
          lastChar !== "-" &&
          lastChar !== "*" &&
          lastChar !== "^" &&
          lastChar !== "%" &&
          lastChar !== "/" &&
          input.value !== ""
        ) {
          count = 0;
          input.value += `**`;
        }
        break;

      case "remider":
        if (
          lastChar !== "." &&
          lastChar !== "+" &&
          lastChar !== "-" &&
          lastChar !== "*" &&
          lastChar !== "^" &&
          lastChar !== "%" &&
          lastChar !== "/" &&
          input.value !== ""
        ) {
          count = 0;
          input.value += `%`;
        }
        break;

      case "equal":
        if (
          lastChar !== "." &&
          lastChar !== "+" &&
          lastChar !== "-" &&
          lastChar !== "*" &&
          lastChar !== "^" &&
          lastChar !== "%" &&
          lastChar !== "/" &&
          input.value !== ""
        ) {
          input.value = eval(input.value);
        }
        break;
    }

    $("#calculate").inputfit();
  });
});

let box = document.querySelector("div.calc");
let shadow = "0 10px 0px black";
for (let i = 0; i < 1000; i++) {
  shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #bb8246";
}
box.style.boxShadow = shadow;
