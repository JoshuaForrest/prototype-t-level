
// Generate random reference number
  function generateReference() {
    const prefix = "WTAG";
    const randomNumber = Math.floor(1000000 + Math.random() * 9000000); // 7 digits
    return prefix + randomNumber;
  }

// Insert into the page
  document.getElementById("reference-number").textContent = generateReference();
