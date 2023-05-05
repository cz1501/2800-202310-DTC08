// Get a reference to the HTML dropdown element where we will display the values
const dropdown = document.getElementById("language-dropdown");

// Get the collection reference for the desired collection
const collectionRef = db.collection("languages");


function populateLanguageDropdown() {
  // Fetch the documents from the collection
  collectionRef.get().then((querySnapshot) => {
    // Loop through each document and get its string fields
    const values = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      for (const key in data) {
        if (typeof data[key] === "string") {
          values.push(data[key]);
        }
      }
    });

    values.sort();


    // Populate the dropdown with the values
    values.forEach((value) => {
      const option = document.createElement("option");
      option.text = value;
      dropdown.add(option);
    });
    option = document.createElement("option");
    option.text = "";
    option.selected = true;
    dropdown.add(option);
  });
}

// Call the populateDropdown function to start populating the dropdown
populateLanguageDropdown();

// when the user selects a language, display login and signup buttons
dropdown.addEventListener("change", (event) => {
    const language = event.target.value;
    if (language) {
        document.getElementById("login").style.display = "block";
        document.getElementById("signup").style.display = "block";
    } else {
        document.getElementById("login").style.display = "none";
        document.getElementById("signup").style.display = "none";
    }
    });
    