const featuresBtn = document.getElementById("features");
const companyBtn = document.getElementById("company");
const featuresDropdown = document.getElementById("sub_features");
const companyDropdown = document.getElementById("sub_company");
const arrows = document.getElementsByClassName("arrow_down");
const mobileMenu = document.getElementById("menu");
const mobileDiv = document.getElementsByClassName("mobile");
const closeMenu = document.getElementById("close_menu");
const featuresBtnMobile = document.getElementById("features_mobile");
const companyBtnMobile = document.getElementById("company_mobile");
const featuresDropdownMobile = document.getElementById("sub_features_mobile");
const companyDropdownMobile = document.getElementById("sub_company_mobile");

document.addEventListener("touchend", function (event) {
  const isClickInsideFeaturesDropdownMobile = featuresDropdownMobile.contains(
    event.target
  );
  const isClickInsideCompanyDropdownMobile = companyDropdownMobile.contains(
    event.target
  );
  const isClickOutsideCompanyBtnMobile = !companyBtnMobile.contains(
    event.target
  );
  const isClickOutsideFeaturesBtnMobile = !featuresBtnMobile.contains(
    event.target
  );
  const isClickOutsideFeaturesDropdownMobile =
    !isClickInsideFeaturesDropdownMobile;
  const isClickOutsideCompanyDropdownMobile =
    !isClickInsideCompanyDropdownMobile;

  if (isClickOutsideFeaturesBtnMobile && isClickOutsideFeaturesDropdownMobile) {
    featuresDropdownMobile.style.display = "none";
    Array.from(arrows).forEach((arrow) => {
      arrow.setAttribute("src", "images/icon-arrow-down.svg");
    });
  }

  if (isClickOutsideCompanyBtnMobile && isClickOutsideCompanyDropdownMobile) {
    companyDropdownMobile.style.display = "none";
    Array.from(arrows).forEach((arrow) => {
      arrow.setAttribute("src", "images/icon-arrow-down.svg");
    });
  }
});

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
  // console.log(isClickOutsideFeaturesBtn, isClickOutsideFeaturesDropdown);
});

var heroImage = document.querySelector("#heroImage");
changeHeroByScreenSize();

function changeHeroByScreenSize() {
  var mobileImage = "./images/image-hero-mobile.png";
  var desktopImage = "./images/image-hero-desktop.png";
  if (window.innerWidth <= 400) {
    heroImage.setAttribute("src", mobileImage);
  }
}

window.addEventListener("resize", changeHeroByScreenSize);

mobileMenu.addEventListener("click", () => {
  mobileDiv[0].style.display = "flex";
  mobileMenu.style.display = "none";
});
