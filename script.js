// #21 import the updateGround and setupGround from the ground.js file
import { updateGround, setupGround } from "./ground.js"
import { updateDino, setupDino, getDinoRect, setDinoLose } from "./dino.js"
import { updateCactus, setupCactus, getCactusRects } from "./cactus.js"

// #5 create variables for the world width and height
const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

// #1 Select the world by using the data attribute "data-world"
const worldElem = document.querySelector("[data-world]");

// #3 call the setPixelToWorldScale function each time the pixel size of the screen
// changes re-update the world so that it scales properly
setPixelToWorldScale();

// #4 Add a listener for window resize event and call setPixelToWorldScale function
window.addEventListener("resize", setPixelToWorldScale);

// #15 create a lastTime variable to get the time between updates (for step 14)
let lastTime;
let speedScale;
let score;

// #11 Create a function that creates an update loop that runs every single frame and it updates
// all the positions of all of the things inside the world (dinosaur, cactus, score etc)
function update(time) {
  // #17 if lastTime is equal to null then make the lastTime equal to the current time.  
  if (lastTime == null) {
    // #14 Get the time between updates because sometimes the computer might be going through a large
    // workload and normally it takes 10 milliseconds before each update but then you might have a bit
    // of a hiccup and the next update takes 50 milliseconds. 
    // This keeps movement consistent no matter how slow or fast the computer frame rate is. 
    lastTime = time;
    // #13 Call the update function again to keep the update loop
    window.requestAnimationFrame(update);
    return;
  }

  // #16 Create a variable called delta that stores the time minus lastTime to get the time between frames.
  const delta = time - lastTime;

  // #20 call the update ground function from ground.js
  updateGround(delta, speedScale)
  updateDino(delta, speedScale)
  updateCactus(delta, speedScale)
  updateSpeedScale(delta)
  updateScore(delta)
  if (checkLose()) return handleLose()

  lastTime = time;
  // #12 Only call the update function the next time we can change the content on the screen
  // (high refresh monitor)
  window.requestAnimationFrame(update);
}

// #2 Create a function called setPixelToWorldScale
function setPixelToWorldScale() {
  // #6 Create a worldToPixelScale variable
  let worldToPixelScale;
  // #7 If the window ratio (window.innerWidth divided by the window.innerHeight) is larger than
  // the world ratio (WORLD_WIDTH divided by the WORLD_HEIGHT variables) then scale based on the width.
  // Set the worldToPixelScale equal to window.innerWidth divided by WORLD_WIDTH
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH;
    // #8 otherwise scale the world based on the height.
    // Set the worldToPixelScale equal to window.innerHeight divided by WORLD_HEIGHT
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
  }

  // #9 Set the worldElem.style.width equal to the WORLD_WIDTH and multiply it by the worldToPixelScale with a px value
  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  // #10 Set the worldElem.style.height equal to the WORLD_HEIGHT and multiply it by the worldToPixelScale with a px value
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
}
