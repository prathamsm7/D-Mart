let address = () => {
  return `<img
  src="https://content.dmart.in/site/static/media/home.c4ab7044.svg"
  alt=""
/>
<span>Home Delivery</span>

<h3><a id="add-address" href="#divOne">+ Add New Address</a></h3>

<div class="overlay" id="divOne">
  <div class="wrapper">
    <h2>Add Address</h2>
    <a class="close" href="#">&times;</a>
    <div class="content">
      <div class="container">
        <form>
          <div class="in-flex">
            <div>
              <label>Full Name*</label>
              <input required placeholder="Your name.." type="text" />
            </div>
            <div>
              <label>Mobile No*</label>
              <input
                required
                placeholder="Mobile number"
                type="text"
              />
            </div>
          </div>
          <div class="in-flex">
            <div>
              <label>Pincode*</label>
              <input required placeholder="Pincode" type="text" />
            </div>
            <div>
              <label>Area*</label>
              <input required placeholder="Area name" type="text" />
            </div>
          </div>

          <label>Address line 1*</label>
          <input required placeholder="Address line 1" type="text" />

          <label>Address line 2</label>
          <input placeholder="Address line 2" type="text" />

          <label>Landmark*</label>
          <input required placeholder="Landmark" type="text" />
          <hr />

          <div>
            <input type="submit" value="Add Address" />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>`;
};

export { address };
