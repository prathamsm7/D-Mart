function topbar() {
  return `
         <a href="allcatageory.html" id=""><i class="fas fa-bars"></i>All categories</a>
      <div><a href="grocery.html">Grocery</a></div>
      <div><a href="cook&serve.html">Cookware & Serveware</a></div>
      <div><a href="fruits&veg.html">Fruits & Vegetables</a></div>
      <div><a href="kitchen.html">Kitchen Appliances</a></div>
    `;
}

function carasoul() {
  return `
        <img class="one" src="./images/img1.jpg" alt="" />
      <img class="two" src="./images/img2.jpg" />
      <img class="three" src="./images/img3.jpg" />
      <img class="four" src="./images/img4.jpg" />
      `;
}

function flex_Head(head, src) {
  return `
   <p>${head}</p>
      <img
        src=${src}
        alt=""
      />
  `;
}

function flex_img(img) {
  return `
   <img
        src=${img}
        alt=""
      />
  `;
}

function prod_card(img, nams, mrp, sp, sv, elem) {
  return `
   <div>
      <img src=${img} alt="" />
      <p>${nams}</p>
      <div id="p_div">
        <p>MRP ${mrp}</p>
        <p>DMart ${sp}</p>
        <p>Save 10%</p>
      </div>
      <input type="text" value="475gm" />
      <button id="addCart">ADD TO CART</button>
    </div>
  `;
}

export { topbar, carasoul, flex_Head, flex_img, prod_card };
