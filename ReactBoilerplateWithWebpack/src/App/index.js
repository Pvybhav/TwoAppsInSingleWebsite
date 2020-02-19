import React from "react";

let buttonClicked = false;
const buttonActionFromApp1 = () => {
  if (!buttonClicked) {
    const decision = confirm("[APP1] Do you want to open second app?");
    if (decision) {
      console.log("[APP1] => Opening Second App");
      document.getElementById("modal-window-button").click();
      document.getElementById("button1").innerText = "Completed";
      buttonClicked = true;
      alert("Continuing to the next step");
    } else {
      console.log("[APP1] Not opening second app, user cancelled");
    }
  } else {
    console.log("Second app already launched");
  }
};

const App = () => (
  <div>
    <p>APP1</p>
    <button type="button" id="button1" onClick={buttonActionFromApp1}>
      Launch second app function
    </button>
  </div>
);

export default App;
