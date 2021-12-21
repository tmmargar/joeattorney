window.onload = function() {
  buildNavigation();
  buildFooter();
}
function buildFooter() {
  const aryHref = ["index.html", "aboutUs.html", "whyChoose.html", "consultServices.html", "legalServices.html", "disclaimer.html", "contactUs.html"];
  const aryText = ["Home", "About Us", "Why Choose JPV", "Consulting Services", "Legal Services", "Disclaimer", "Contact Us"];
  let linkPrevious;
  for (let index = 0; index < aryHref.length; index++) {
    const link = document.createElement("a");
    link.href = aryHref[index];
    link.innerText = aryText[index];
    if (0 == index) {
      document.getElementById("footer").appendChild(link);
    } else {
      // after not supported by IE
      const separator = document.createTextNode(" | ");
      linkPrevious.parentNode.insertBefore(separator, null);
      linkPrevious.parentNode.insertBefore(link, null);
    }
    linkPrevious = link;
  }
  const breakTag = document.createElement("br");
  const breakTag2 = document.createElement("br");
  const copyTag = document.createElement("span");
  copyTag.innerHTML = "All Content &copy; 2021";
  // after not supported by IE
  linkPrevious.parentNode.insertBefore(breakTag, null);
  linkPrevious.parentNode.insertBefore(breakTag2, null);
  linkPrevious.parentNode.insertBefore(copyTag, null);
}
function buildNavigation() {
  const aryHref = ["index.html", "aboutUs.html", "whyChoose.html", "consultServices.html", "legalServices.html", "disclaimer.html", "contactUs.html"];
  const aryText = ["Home", "About Us", "Why Choose JPV", "Consulting Services", "Legal Services", "Disclaimer", "Contact Us"];
  const aryHref2 = ["consultServices_revenueEnhance.html", "consultServices_denials.html", "consultServices_interimMgt.html", "consultServices_measurement.html", "consultServices_efficiency.html", "consultServices_seminars.html"];
  const aryText2 = ["Revenue Enhancements", "Denials Reductions & Commercial Litigation", "Interim Management Support", "Measurement", "Efficiency Improvement", "Seminars, Education, Retraining"];
  const aryHref3 = ["legalServices_injury.html", "legalServices_acctReceiv.html", "legalServices_contractClaims.html", "legalServices_immigration.html", "legalServices_other.html"];
  const aryText3 = ["Injury Litigation", "Account Receivable Collections", "Contract Claims", "Immigration", "Other Legal Claims Handled"];
  const ulRoot = document.createElement("ul");
  document.getElementById("nav").appendChild(ulRoot);
  for (let index = 0; index < aryHref.length; index++) {
    const liRoot = document.createElement("li");
    ulRoot.appendChild(liRoot);
    const link = document.createElement("a");
    link.href = aryHref[index];
    link.innerText = aryText[index];
    liRoot.appendChild(link);
    if (3 == index) {
      const ulRoot2 = document.createElement("ul");
      liRoot.appendChild(ulRoot2);
      for (let index2 = 0; index2 < aryHref2.length; index2++) {
        const liRoot2 = document.createElement("li");
        ulRoot2.appendChild(liRoot2);
        const link2 = document.createElement("a");
        link2.href = aryHref2[index2];
        link2.innerText = aryText2[index2];
        liRoot2.appendChild(link2);
      }
    } else if (4 == index) {
      const ulRoot3 = document.createElement("ul");
      liRoot.appendChild(ulRoot3);
      for (let index3 = 0; index3 < aryHref3.length; index3++) {
        const liRoot3 = document.createElement("li");
        ulRoot3.appendChild(liRoot3);
        const link3 = document.createElement("a");
        link3.href = aryHref3[index3];
        link3.innerText = aryText3[index3];
        liRoot3.appendChild(link3);
      }
    }
  }
}