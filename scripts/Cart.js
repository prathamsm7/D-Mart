var cartArr = JSON.parse(localStorage.getItem("cartDatabase")) || [];
// displayTable(cartArr);
document.querySelector(".cart-items-count").textContent = cartArr.length;
document.querySelector("#cart-items-c").textContent = cartArr.length;
document.querySelector("#total").textContent = TotalInRs;
displayTable(cartArr);
if (cartArr.length != 0) {
  var subTotalInRs = Math.ceil(
    cartArr
      .map(function (elem) {
        return Number(elem.price);
      })
      .reduce(function (a, b) {
        return a + b;
      })
  );
} else {
  var subTotalInRs = 0;
}
displayTable(cartArr);
document.querySelector("#sub-total").textContent = subTotalInRs;
var TotalInRs = subTotalInRs + 50;
document.querySelector("#total").textContent = TotalInRs;

function displayTable(arr) {
  document.querySelector("tbody").textContent = "";

  arr.map(function (elem, ind) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = ind + 1;
    var td2 = document.createElement("td");
    td2.setAttribute("id", "td2");

    var image = document.createElement("img");
    image.setAttribute("src", elem.imgUrl);
    var title = document.createElement("td");
    title.textContent = elem.name;
    td2.append(image);

    var td3 = document.createElement("td");
    td3.textContent = 1;
    var td4 = document.createElement("td");
    td4.textContent = "₹" + elem.price;
    // var td5 = document.createElement("td");
    // td5.textContent = "₹ " + "0.00";

    // var td6 = document.createElement("td");
    // td6.textContent = elem.rs;
    var td7 = document.createElement("td");
    var btn = document.createElement("button");
    btn.textContent = "X";
    btn.style.fontSize = "Large";
    btn.setAttribute("id", "remove-item-button");
    btn.addEventListener("click", function () {
      arr = JSON.parse(localStorage.getItem("cartDatabase"));
      arr.splice(ind, 1);
      window.location.reload();
      document.querySelector("#total").textContent = TotalInRs;
      displayTable(arr);

      localStorage.setItem("cartDatabase", JSON.stringify(arr));

      displayTable(arr);
      document.querySelector("#cart-items-count").textContent = arr.length;

      if (arr.length != 0) {
        subTotalInRs = Math.ceil(
          arr
            .map(function (elem) {
              return Number(elem.price);
            })
            .reduce(function (a, b) {
              return a + b;
            })
        );
      } else {
        subTotalInRs = 0;
      }

      document.querySelector("#sub-total").textContent = subTotalInRs;
      TotalInRs = subTotalInRs + 50;
      displayTable(arr);
      document.querySelector("#total").textContent = TotalInRs;
      displayTable(arr);
    });

    // document.querySelector("#sub-total").textContent = subTotalInRs;

    // TotalInRs = subTotalInRs + 50;
    // document.querySelector("#total").textContent = TotalInRs;

    td7.append(btn);
    tr.append(td1, td2, title, td3, td4, td7);
    document.querySelector("tbody").append(tr);
  });
}

document
  .querySelector("#checkout-btn-bottom")
  .addEventListener("click", function () {
    if (TotalInRs == 50) {
      alert("Plz Add items in Cart!!!");
    } else {
      localStorage.setItem("subTotal", subTotalInRs);
      localStorage.setItem("cartAmount", TotalInRs);

      window.location.href = "checkout.html";
    }
  });
