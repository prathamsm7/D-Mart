function navbar() {
  return `
   
  <a href="index.html"><div id="logo">
       <img id="logo_img"
        src="https://github.com/prathamsm7/D-Mart/blob/Rupesh/edit/components/images/logo.jpg?raw=true"
        alt="logo"
      />
      </div></a>
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
        
        <i class="far fa-user"><a id="user" href="signup.html">Sign In/Register</a></i>
      </div>
      <div id="cart">
        <a href="Cart.html"> <i class="fas fa-shopping-cart"></i>Cart</a>
      </div>
    `;
}

export default navbar;

