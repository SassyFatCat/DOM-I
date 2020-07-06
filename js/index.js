const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
// End of example

// NAV -------------------------------------------------------------->
const header = document.querySelectorAll('header nav a');
const headerImg = document.querySelector('header img');
header.forEach((link, index) => link.textContent = Object.values(siteContent.nav)[index]);
headerImg.src = siteContent.nav["img-src"];

//CTA --------------------------------------------------------------->
const ctaText = document.querySelectorAll('.cta-text *');
const ctaImg = document.querySelector('.cta img');
ctaText.forEach((element, index) => element.textContent = Object.values(siteContent.cta)[index]);
ctaImg.src = siteContent.cta["img-src"];

//MAIN-CONTENT ------------------------------------------------------>
const mainContent = document.querySelectorAll('.main-content h4, .main-content p, .main-content img');
mainContent.forEach((element, index) => element.tagName == "IMG" ? element.src = Object.values(siteContent["main-content"])[index]
                                                                : element.textContent = Object.values(siteContent["main-content"])[index]
);

//CONTACT ---------------------------------------------------------->
const contact = document.querySelectorAll('.contact *');
contact.forEach((element, index) => element.textContent = Object.values(siteContent.contact)[index]);

//FOOTER ----------------------------------------------------------->
const footerParagraph = document.querySelector('footer p');
footerParagraph.textContent = siteContent.footer["copyright"];

//ADD NEW CONTENT
// const headerNav = document.querySelector('header nav');
// const newLinkA = document.createElement('a');
// newLinkA.textContent = "LinkA";
// const newLinkB = document.createElement('a');
// newLinkB.textContent = "LinkB";
// headerNav.prepend(newLinkA);
// headerNav.appendChild(newLinkB);

// header.forEach(x => x.style.color = 'blue');
// newLinkA.style.color = 'blue';
// newLinkB.style.color = 'blue';

// STRETCH
//Select all elements
const allElements = document.querySelectorAll('h1, h4, p, img, a, button');

function updateContent(infoObject) {
// Extract all JSON values into an array
const infoArray = [];
for (let i = 0; i < Object.keys(infoObject).length; i++) {
  for (let j = 0; j < Object.values(infoObject[Object.keys(infoObject)[i]]).length; j++) {
    infoArray.push(Object.values(infoObject[Object.keys(infoObject)[i]])[j])
  }
};
// Assign values to elements from infoArray
allElements.forEach((x, index) => {
  switch(x.tagName) {
    case 'A':
    case 'H1':
    case 'H4':
    case 'P':
    case 'BUTTON':
    x.textContent = infoArray[index];
    break;

    case 'IMG':
    x.src = infoArray[index];
    break;
  }
});
}
updateContent(siteContent);

const button = document.querySelector('.cta-text button');

button.addEventListener('click', toggleInfo);


