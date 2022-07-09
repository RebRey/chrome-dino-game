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

let lastTime
let speedScale
let score

// #11 Create a function that creates an update loop that runs every single frame and it updates
// all the positions of all of the things inside the world (dinosaur, cactus, score etc)
function update(time) {
  if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(update)
    return
  }
  const delta = time - lastTime

  updateGround(delta, speedScale)
  updateDino(delta, speedScale)
  updateCactus(delta, speedScale)
  updateSpeedScale(delta)
  updateScore(delta)
  if (checkLose()) return handleLose()

  lastTime = time
  window.requestAnimationFrame(update)
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
