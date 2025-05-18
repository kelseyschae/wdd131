const menuButton = document.querySelector(".menu-button");
const gallery = document.querySelector(".gallery");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  } 
} 

handleResize(); 

function viewerTemplate(pic1, alt1) {
  return `<div class="viewer">
    <span class="close-viewer">X</span>
    <img src="${pic1}" alt="${alt1}">
    </div>`;
} 
function viewerTemplate(pic2, alt2) {
    return `<div class="viewer">
      <span class="close-viewer">X</span>
      <img src="${pic2}" alt="${alt2}">
      </div>`;
  } 

  function viewerTemplate(pic3, alt3) {
    return `<div class="viewer">
      <span class="close-viewer">X</span>
      <img src="${pic3}" alt="${alt3}">
      </div>`;
  } 

  function viewerTemplate(pic4, alt4) {
    return `<div class="viewer">
      <span class="close-viewer">X</span>
      <img src="${pic4}" alt="${alt4}">
      </div>`;
  } 

  function viewerTemplate(pic5, alt5) {
    return `<div class="viewer">
      <span class="close-viewer">X</span>
      <img src="${pic5}" alt="${alt5}">
      </div>`;
  } 

  function viewerTemplate(pic6, alt6) {
    return `<div class="viewer">
      <span class="close-viewer">X</span>
      <img src="${pic6}" alt="${alt6}">
      </div>`;
  } 

  function viewerTemplate(pic7, alt7) {
    return `<div class="viewer">
      <span class="close-viewer">X</span>
      <img src="${pic7}" alt="${alt7}">
      </div>`;
  } 

  function viewerTemplate(pic8, alt8) {
    return `<div class="viewer">
      <span class="close-viewer">X</span>
      <img src="${pic8}" alt="${alt8}">
      </div>`;
  } 

  function viewerTemplate(pic9, alt9) {
    return `<div class="viewer">
      <span class="close-viewer">X</span>
      <img src="${pic9}" alt="${alt9}">
      </div>`;
  } 


function viewHandler(event) {
  const target = event.target;
  console.dir(target);
  const imgSrc = event.target.src.split("-");
  const newSrc = imgSrc[0] + "-full.jpeg";

  document.body.insertAdjacentHTML(
    "afterbegin",
    viewerTemplate(newSrc, target.alt)
  ); 
 
  document
    .querySelector(".close-viewer")
    .addEventListener("click", closeViewer); 
} 

add.Modal(events);
modal.addEventListener('click', events)

function closeViewer() {
    document.querySelector(".viewer")?.remove(); 
  } 

menuButton.addEventListener("click", toggleMenu);
gallery.adEventListener("click", viewHandler);
window.addEventListener("click",handleResize)