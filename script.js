// eta sudhu matro catagory onujai select korar jonno

// function filterCheck() {
//   const checkedCategories = Array.from(document.querySelectorAll('input[type="checkbox"][data-option="filter.p.t.category"]:checked')).map(cb => cb.name);
//   const checkedSizes = Array.from(document.querySelectorAll('input[type="checkbox"][data-option="filter.p.t.size"]:checked')).map(cb => cb.name);

//   const productCards = document.querySelectorAll('.product-card');

//   productCards.forEach(card => {
//     const productCategory = card.getAttribute('data-category');
//     const productSizes = card.getAttribute('data-size').split(',');

//     const matchCategory = checkedCategories.length === 0 || checkedCategories.includes(productCategory);
//     const matchSize = checkedSizes.length === 0 || checkedSizes.some(size => productSizes.includes(size));

//     if (matchCategory && matchSize) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });

//   // Update product count
//   const visibleCount = Array.from(productCards).filter(card => card.style.display !== "none").length;
//   document.querySelector(".collection-product-count").textContent = `${visibleCount} products`;
// }





function filterCheck() {
  // Get all the checked categories
  const selectedCategories = Array.from(document.querySelectorAll('.filter-item-checkbox:checked'))
  .map(checkbox => checkbox.name);

  // Get all product cards
  const products = document.querySelectorAll('.product-card');
  let visibleProducts = 0;

  // Loop through each product and check if its category matches the selected ones
  products.forEach(product => {
    const category = product.getAttribute('data-category');
    
    // If no category is selected, show all products; otherwise, show only the selected ones
    if (selectedCategories.length === 0 || selectedCategories.includes(category)) {
      product.style.display = 'block'; // Show product
      visibleProducts++;
    } else {
      product.style.display = 'none'; // Hide product
    }
  });

  // Update product count
  document.querySelector('.collection-product-count').textContent = `${visibleProducts} products`;
}

// Run filterCheck on page load
window.addEventListener('DOMContentLoaded', filterCheck);





document.getElementById("sort_by").addEventListener("change", function () {
  const selectedValue = this.value;
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(product => {
    const priceText = product.querySelector(".product-price").textContent;
    const price = parseFloat(priceText.replace(/[^\d.]/g, "")); // removes ৳

    if (selectedValue === "all" || selectedValue === "manual") {
      product.style.display = "block";
      return;
    }

    if (selectedValue.includes("-")) {
      const [min, max] = selectedValue.split("-").map(Number);
      if (price >= min && price <= max) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    } else {
      product.style.display = "none";
    }
  });
});

// product count er jonno
document.addEventListener("DOMContentLoaded", function () {
  const productCount = document.querySelectorAll(".product-card").length;
  const countElement = document.querySelector(".collection-product-count");
  if (countElement) {
    countElement.textContent = `${productCount} products`;
  }
})

function filterCheck() {
  // সব সাইজ চেকবক্স নাও
  const checkboxes = document.querySelectorAll('.filter-item-checkbox');
  
  // চেক করা ভ্যালুগুলা বের করো
  const selectedSizes = [];

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedSizes.push(checkbox.value);
    }
  });

  // কনসোলে দেখাও কোন সাইজগুলো সিলেক্ট করা হয়েছে
  console.log("Selected Sizes:", selectedSizes);

  // এখানে তুমি চাইলে সাইজ অনুযায়ী প্রোডাক্ট ফিল্টার করতে পারো
  // উদাহরণ:
  // filterProductsBySize(selectedSizes);
}