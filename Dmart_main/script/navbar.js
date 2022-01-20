function navbar() {
    return `
      <div id="logo">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.CFth4UtrqG9G0JCPZSfIqgAAAA&pid=Api&P=0&w=317&h=127"
            alt="logo"
          />
        </div>
        <div id="lct">
          <p><i class="fas fa-map-marker-alt"></i> Mumbai 400000</p>
        </div>
        <div id="form">
          <input
            type="text"
            id="search"
            placeholder="What are you looking for ?"
          />
          <button type="submit" id="btn">Search</button>
        </div>
        <div id="signin">
          <p id="user"></p>
          <a href="signup.html"><i class="far fa-user"></i>Sign In/Register</a>
        </div>
        <div id="cart">
          <a href=""> <i class="fas fa-shopping-cart"></i>Cart</a>
        </div>
      `;
  }
  
  export default navbar;

  