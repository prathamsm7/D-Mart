document.getElementById("nav-name").textContent =
  localStorage.getItem("mylocal_2");
function debit() {
  document.getElementById("pay-now").innerHTML = null;
  document.getElementById("credit").style.backgroundColor = "white";
  document.getElementById("upi-div").style.backgroundColor = "white";
  document.getElementById("cash").style.backgroundColor = "white";

  let main = document.getElementById("pay-now");

  let secure_img = document.createElement("img");
  secure_img.setAttribute("id", "secure-img");
  secure_img.src = "images/secure.jpg";

  let msg = document.createElement("div");
  msg.innerHTML = "Pay securely using your Debit Card.";

  let btn = document.createElement("button");
  btn.setAttribute("id", "btn-debit");
  btn.innerHTML = "PAY SECURELY";

  btn.addEventListener("click", () => {
    window.location.href = "gateway.html";
  });
  document.getElementById("debit").style.backgroundColor = "#e4f4e8";
  main.append(secure_img, msg, btn);
}

function credit() {
  document.getElementById("pay-now").innerHTML = null;
  document.getElementById("debit").style.backgroundColor = "white";
  document.getElementById("upi-div").style.backgroundColor = "white";
  document.getElementById("cash").style.backgroundColor = "white";

  let main = document.getElementById("pay-now");

  let secure_img = document.createElement("img");
  secure_img.setAttribute("id", "secure-img");
  secure_img.src = "images/secure.jpg";

  let msg = document.createElement("div");
  msg.innerHTML = "Pay securely using your Credit Card.";

  let btn = document.createElement("button");
  btn.setAttribute("id", "btn-credit");
  btn.innerHTML = "PAY SECURELY";

  btn.addEventListener("click", () => {
    window.location.href = "gateway.html";
  });
  document.getElementById("credit").style.backgroundColor = "#e4f4e8";
  main.append(secure_img, msg, btn);
}

function upi() {
  document.getElementById("pay-now").innerHTML = null;
  document.getElementById("debit").style.backgroundColor = "white";
  document.getElementById("credit").style.backgroundColor = "white";
  document.getElementById("cash").style.backgroundColor = "white";

  let main = document.getElementById("pay-now");

  let secure_img = document.createElement("img");
  secure_img.setAttribute("id", "secure-img");
  secure_img.src = "images/upi-image.jpg";

  let msg = document.createElement("div");
  msg.innerHTML =
    "Pay using your VPA (UPI ID) or the QR code scanner on your UPI App (GPay, PhonePe, AmazonPay etc).";

  let btn = document.createElement("button");
  btn.setAttribute("id", "btn-upi");
  btn.innerHTML = "PAY SECURELY";

  btn.addEventListener("click", () => {
    window.location.href = "upiGateway.html";
  });
  document.getElementById("upi-div").style.backgroundColor = "#e4f4e8";
  main.append(secure_img, msg, btn);
}
function cash() {
  document.getElementById("pay-now").innerHTML = null;
  document.getElementById("debit").style.backgroundColor = "white";
  document.getElementById("credit").style.backgroundColor = "white";
  document.getElementById("upi-div").style.backgroundColor = "white";

  let main = document.getElementById("pay-now");

  let secure_img = document.createElement("img");
  secure_img.setAttribute("id", "secure-img");
  secure_img.src = "images/pod.png";

  let msg = document.createElement("div");
  msg.innerHTML = "You can pay by CARD or CASH at the time of delivery.";

  let btn = document.createElement("button");
  btn.setAttribute("id", "btn-cash");
  btn.innerHTML = "PAY SECURELY";

  btn.addEventListener("click", () => {
    alert("Please Pay After Order Get Delivered");

    window.location.href = "success.html";
  });
  document.getElementById("cash").style.backgroundColor = "#e4f4e8";
  main.append(secure_img, msg, btn);
}
