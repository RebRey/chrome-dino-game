// #24 Create a function called getCustomProperty
// export it so they can be used in the code
// pass in the elem (element) and prop (property)
export function getCustomProperty(elem, prop) {
// #27 return the getComputedStyle of our element (this allows us to get css variables)
// get the property value of the prop. This will return a string because everything in css is a string.
// use parseFloat to convert the strings into floats.
// if there is no value default it to O.
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
  }
  
  // #25 Create a function called setCustomProperty pass in the elem, prop, and value (the value we want to se this to)
  // export it so they can be used in the code
  export function setCustomProperty(elem, prop, value) {
    // #28 take the elem style and use the set property method, pass it in the prop and value 
    elem.style.setProperty(prop, value)
  }
  
  // #26 Create a function called incrementCustomProperty and pass in the elem, prop, and inc (the amount to increment by)
  // export it so they can be used in the code
  // This will combine the information from the getCustom Property and setCustom Property
  export function incrementCustomProperty(elem, prop, inc) {
    // #29 Call the setCustomProperty, pass it elem, prop, and getCustomProperty, pass it elem, prop
    // and add in the incremented value
    setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc)
  }