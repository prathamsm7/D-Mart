function navbar() {
  return `
      <div id="myfind">
      <input
      id="search"
      class="search_input"
      type="text"
      placeholder="What are you looking for ?"
      />
      <button type="submit" id="btn" class="find_btn">Search</button>
         <a href="javascript:void(0)" class="closeInp" onclick="closeInp()">&times;</a>     
    </div>
   <div id="mySidepanel" class="sidepanel">
            <div id="side-top">
              <i
                href="javascript:void(0)"
                class="fa fa-close"
                style="background-color: rgb(255, 255, 255)"
                onclick="closeNav()"
              ></i
            >
            <p>
            All categories
            </p>
            </div>
            <ul id="categories">
            </ul>
          </div>
   <div id="burger">
        <i class="fas fa-bars" id="openmenu"></i>
      </div>
    <div id="logo">
    <a href="index.html">
    <img
    src="./images/logo.jpg"
    alt="logo"
    />
    </a>
      </div>
      <div id="lct">
        <p><i class="fas fa-map-marker-alt"></i> Mumbai 400000</p>
      </div>
      <div id="form">
        <input
          type="text"
          class="f_input"
          id="search"
          placeholder="What are you looking for ?"
        />
        <button type="submit" id="btn" class="find_btn">Search</button>
      </div>

      <div id="find" onclick="openFind()">
        <span><i class="fas fa-search"></i></span>
      </div>

      <div id="signin">
        <a href="signup.html"><i class="far fa-user"></i><span id="nav-name">Sign In/Register</span></a>
      </div>
      <div id="cart">
        <a href="Cart.html"> <i class="fas fa-shopping-cart"></i><sup  id="crTotal"></sup><span>Cart</span></a>
      </div>
    `;
}

function openmenu() {
  console.log("open menu");
}

export { navbar, openmenu };
