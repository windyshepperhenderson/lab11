let userVotes = 0;
const maxVotes = 25;

// DOM Nodes
let toyContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

// keep each goat in an object
function Toy(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

// function to choose a random goat
function getRandomIndex() {
  return Math.floor(Math.random() * allToys.length);
}

// function to render 2 random goats
function renderToys() {
  // get 2 rnadom indexes from our goat array
  let toy1Index = getRandomIndex();
  let toy2Index = getRandomIndex();
  let toy3Index = getRandomIndex();

  // prevent the two images being the same goat
  while (
    toy1Index === toy2Index ||
    toy1Index === toy3Index ||
    toy2Index === toy3Index
  ) {
    toy2Index = getRandomIndex();
    toy3Index = getRandomIndex();
    break;
  }

  // change the src of our 2 images
  image1.src = allToys[toy1Index].src;
  image2.src = allToys[toy2Index].src;
  image3.src = allToys[toy3Index].src;
  image1.alt = allToys[toy1Index].name;
  image2.alt = allToys[toy2Index].name;
  image3.alt = allToys[toy3Index].name;

  // increase the goats views
  allToys[toy1Index].views++;
  allToys[toy2Index].views++;
  allToys[toy3Index].views++;
}

// handle the goat being clicked
function handleToyClick(event) {
  //adding user clicks maximum
  if (userVotes >= maxVotes) {
    alert("Click 'View Results' to see the results.");
    return; // Exit the function if the user has reached the limit
  }

  // get the name of the goat we just clicked
  let clickedToy = event.target.alt;

  // check if the click is on an image
  if (event.target === toyContainer) {
    alert("Please click on an image");
  } else {
    // render more goats
    renderToys();
  }

  // increase the clicks of the goat
  // loop through allGoats
  for (let i = 0; i < allToys.length; i++) {
    // check if the name of the goat in the array, matches the alt tag of our image
    if (clickedToy === allToys[i].name) {
      // increase the number of clicks
      allToys[i].clicks++;
      // increment userVotes
      userVotes++;
      // stop the for loop because we found the goat

      break;
    }
  }
}

// make the goats
const allToys = [
  new Toy("bag", "./images/bag.jpg"),
  new Toy("banana", "./images/banana.jpg"),
  new Toy("bathroom", "./images/bathroom.jpg"),
  new Toy("boots", "./images/boots.jpg"),
  new Toy("breakfast", "./images/breakfast.jpg"),
  new Toy("bubblegum", "./images/bubblegum.jpg"),
  new Toy("chair", "./images/chair.jpg"),
  new Toy("cthulhu", "./images/cthulhu.jpg"),
  new Toy("dog-duck", "./images/dog-duck.jpg"),
  new Toy("dragon", "./images/dragon.jpg"),
  new Toy("pen", "./images/pen.jpg"),
  new Toy("pet-sweep", "./images/pet-sweep.jpg"),
  new Toy("scissors", "./images/scissors.jpg"),
  new Toy("shark", "./images/shark.jpg"),
  new Toy("sweep", "./images/sweep.png"),
  new Toy("tauntaun", "./images/tauntaun.jpg"),
  new Toy("unicorn", "./images/unicorn.jpg"),
  new Toy("water-can", "./images/water-can.jpg"),
  new Toy("wine-glass", "./images/wine-glass.jpg"),
];

// render the results
// when the user clicks the view results button
// render a ul full of lis that tell the user how many tiems each goat has been clicked

// add the event listener to the goats
toyContainer.addEventListener("click", handleToyClick);

renderToys();
