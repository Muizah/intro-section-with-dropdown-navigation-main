const featuresBtn = document.getElementById("features");
const companyBtn = document.getElementById("company");
const featuresDropdown = document.getElementById("sub_features");
const companyDropdown = document.getElementById("sub_company");
const arrows = document.getElementsByClassName("arrow_down");

featuresBtn.addEventListener("mouseover", () => {
  featuresDropdown.style.display = "flex";
  Array.from(arrows).forEach((arrow) => {
    arrow.setAttribute("src", "images/icon-arrow-up.svg");
  });
});

companyBtn.addEventListener("mouseover", () => {
  companyDropdown.style.display = "flex";
  Array.from(arrows).forEach((arrow) => {
    arrow.setAttribute("src", "images/icon-arrow-up.svg");
  });
});

document.addEventListener("mouseout", function (event) {
  const isClickInsideFeaturesDropdown = featuresDropdown.contains(event.target);
  const isClickInsideCompanyDropdown = companyDropdown.contains(event.target);
  const isClickOutsideCompanyBtn = !companyBtn.contains(event.target);
  const isClickOutsideFeaturesBtn = !featuresBtn.contains(event.target);
  const isClickOutsideFeaturesDropdown = !isClickInsideFeaturesDropdown;
  const isClickOutsideCompanyDropdown = !isClickInsideCompanyDropdown;

  if (isClickOutsideFeaturesBtn && isClickOutsideFeaturesDropdown) {
    featuresDropdown.style.display = "none";
    Array.from(arrows).forEach((arrow) => {
      arrow.setAttribute("src", "images/icon-arrow-down.svg");
    });
  }

  if (isClickOutsideCompanyBtn && isClickOutsideCompanyDropdown) {
    companyDropdown.style.display = "none";
    Array.from(arrows).forEach((arrow) => {
      arrow.setAttribute("src", "images/icon-arrow-down.svg");
    });
  }
  console.log(isClickOutsideFeaturesBtn, isClickOutsideFeaturesDropdown);
});
