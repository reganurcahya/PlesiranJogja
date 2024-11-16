// Add any JavaScript functionality here
document.addEventListener("DOMContentLoaded", function () {
  // Example: Handle filter changes
  const filterCheckboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');
  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      // Add filter logic here
      console.log("Filter changed:", this.id, this.checked);
    });
  });

  // Example: Handle rent button clicks
  const rentButtons = document.querySelectorAll(".btn-rent");
  rentButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Add rental logic here
      console.log("Rent button clicked");
    });
  });
});
