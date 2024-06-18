// Toggle Search Bar
function toggleSearch() {
  var searchBar = document.getElementById("search-bar");
  if (searchBar.style.display === "block") {
    searchBar.style.display = "none";
  } else {
    searchBar.style.display = "block";
  }
}

// Toggle Cart Popup
function toggleCart() {
  var cartPopup = document.getElementById("cart-popup");
  if (cartPopup.style.display === "block") {
    cartPopup.style.display = "none";
  } else {
    cartPopup.style.display = "block";
  }
}
