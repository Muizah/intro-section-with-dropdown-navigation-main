const featuresBtn = document.getElementById("features");
const companyBtn = document.getElementById("company");
const featuresDropdown = document.getElementById("sub_features");
const companyDropdown = document.getElementById("sub_company");
const arrowDown = document.getElementById("arrow_down");

featuresBtn.addEventListener("click", () => {
  featuresDropdown.style.display = "flex";
});

companyBtn.addEventListener("click", () => {
  companyDropdown.style.display = "flex";
});
