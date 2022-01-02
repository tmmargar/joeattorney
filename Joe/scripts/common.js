window.onload = function() {
  buildHead();
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
function buildHead() {
 const titleTag = document.getElementsByTagName("title").item(0);
 //<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 const metaContent = document.createElement("meta");
 metaContent.httpEquiv ="Content-Type";
 metaContent.content = "text/html; charset=UTF-8";
 //document.head.appendChild(metaContent);
 document.head.insertBefore(metaContent, titleTag);
 const metaCache = document.createElement("meta");
 metaCache.httpEquiv = "Cache-Control";
 metaCache.content = "no-cache";
 document.head.insertBefore(metaCache, titleTag);
  /*<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <link href="images/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
 <link href="images/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32">
 <link href="images/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16">
 <link href="images/site.webmanifest" rel="manifest">*/
 const metaView = document.createElement("meta");
 metaView.name = "viewport";
 metaView.content = "width=device-width, initial-scale=1";
 //document.head.appendChild(metaView);
 document.head.insertBefore(metaView, titleTag);
 const linkApple = document.createElement("link");
 linkApple.href = href="images/apple-touch-icon.png";
 linkApple.rel = "apple-touch-icon";
 linkApple.sizes = "180x180";
 document.head.insertBefore(linkApple, titleTag);
 const linkFav32 = document.createElement("link");
 linkFav32.href = href="images/favicon-32x32.png";
 linkFav32.rel = "icon";
 linkFav32.sizes = "32x32";
 document.head.insertBefore(linkFav32, titleTag);
 const linkFav16 = document.createElement("link");
 linkFav16.href = href="images/favicon-16x16.png";
 linkFav16.rel = "icon";
 linkFav16.sizes = "16x16";
 document.head.insertBefore(linkFav16, titleTag);
 const linkManifest = document.createElement("link");
 linkManifest.href = href="images/site.webmanifest";
 linkManifest.rel = "manifest";
 document.head.insertBefore(linkManifest, titleTag);
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