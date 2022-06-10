// QUERY SELECTOR
const pageHeader = document.querySelector("#header");
console.log("page-header", pageHeader);
// pageHeader.style.color = "salmon";

const articleHeader = document.querySelector(".article-header");
console.log("article-header", articleHeader);
// articleHeader.style.color = "goldenrod";

const allHeaders = document.querySelectorAll("header");
console.log("allHeaders", allHeaders);
// for (let i = 0; i < allHeaders.length; i++) {
//     allHeaders[i].style.backgroundColor = "blue";
// }

// CREATING ELEMENTS
const subTitle = document.createElement("p");
subTitle.innerText = "Tolles Logo";
subTitle.classList.add("sub-title");

const smallText = document.createElement("small");
smallText.innerText = "Test";

pageHeader.append(subTitle, smallText);

const toggle = document.querySelector("#toggle-wrapper");
toggle.addEventListener("input", toggleMode);

function toggleMode() {
    document.body.classList.toggle("dark");
}
