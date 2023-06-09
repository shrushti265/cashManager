import "./styles.css";

const billAmount = document.querySelector("#bill-amount");
const userPay = document.querySelector("#given-amount");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-msg");
const noOfNotes = document.querySelector(".no-of-notes");

const currency = [500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validate() {
  console.clear();
  let ba = Math.floor(billAmount.value);
  let cp = Math.floor(userPay.value);

  if (ba > 0) {
    if (cp >= ba) {
      const amountChange = cp - ba;
      calculateChange(amountChange);
    } else {
      showMessage("want to wash plates!!!");
    }
  } else {
    showMessage("Invalid bill amount");
  }
});

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function calculateChange(amountChange) {
  for (let i = 0; i < currency.length; i++) {
    const numberOfNotes = Math.trunc(amountChange / currency[i]);
    amountChange %= currency[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
