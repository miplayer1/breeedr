// DOM elements ooops
const imageS = document.getElementById("titre-breeedr");
//const glDescriptions = document.getElementById("gl-descriptions");
const nextBtn = document.getElementById("next");

// functions
const randomize = max => Math.floor(Math.random() * max);

const reset = () => {
  imageS.innerHTML = "";
//  glDescriptions.innerHTML = "";
};

console.log(breeedr[randomize(breeedr.length)]);

const displayRandomPractice = () => {
  reset();
  const breeeder = breeedr[randomize(breeedr.length)];
 imageS.innerHTML = `${breeeder}`;
//  glDescriptions.innerHTML = `${breeedr[gloss].description}`;
  // ooops.splice(gloss, 1);
};
displayRandomPractice();
nextBtn.addEventListener("click", displayRandomPractice);
