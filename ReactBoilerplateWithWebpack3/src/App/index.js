import React from "react";

const LaunchModal = () => {
  console.log("[APP2] => LaunchingModal");
};

const closeModal = () => {
  document.getElementById("button1").click();
  console.log("[APP2] => Going back to App1 and clicking button");
};

const App = () => (
  <div>
    <p>APP3 (Open Modal button is collapsed)</p>
    <button
      type="button"
      onClick={LaunchModal}
      id="modal-window-button"
      style={{ visibility: "collapse" }}
    >
      Open Modal
    </button>
    <button type="button" id="close-modal" onClick={closeModal}>
      Close Modal
    </button>
  </div>
);

export default App;
