console.log('Hello, world!')
let x = new Date()
day = x.getDay()

// Function creates a node and appends to the page
function isClosed(){
    let node = document.createElement("H3");
    node.setAttribute('id', 'closed-banner')
    node.setAttribute('class', 'openBanner center')
    let textnode = document.createTextNode("Sorry, we are closed on Sundays. Please come back Monday-Saturday 🌸");
    node.appendChild(textnode);
    document.getElementById("append").appendChild(node);
}

// If not sunday, console log that we are open!
// If Sunday, run isClosed function
function isSiamOrchidOpen(){
  if (day == 7)
    return(console.log("We are open!"))
  else
    return (isClosed())
}

console.log(isSiamOrchidOpen())



