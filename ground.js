import {
    getCustomProperty,
    incrementCustomProperty,
    setCustomProperty,
  } from "./updateCustomProperty.js"
  
  const SPEED = 0.05

  // #18 create a variable called groundElems that stores the selected ground elements
  const groundElems = document.querySelectorAll("[data-ground]")
  
  export function setupGround() {
    setCustomProperty(groundElems[0], "--left", 0)
    setCustomProperty(groundElems[1], "--left", 300)
  }
  
  // #19 Create an updateGround function that takes in the delta and speedScale variables 
  // Export the function so that it can be used on script.js
  export function updateGround(delta, speedScale) {
    // #22 Update the position of the ground elements by taking the current position
    groundElems.forEach(ground => {
        // #23 Update it by taking a css variable and converting it to javascript variable
        // and converting it back to a css variable
      incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)
  
      if (getCustomProperty(ground, "--left") <= -300) {
        incrementCustomProperty(ground, "--left", 600)
      }
    })
  }
  Footer
  