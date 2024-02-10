let salon = {
    name: "The Fashion Pet",
    phone: "123-456-7890",
    address: {
        street: "Palm",
        number: "262-K",
        zip: "12345"
    },
    pets: []  // pets array
};

// Constructor
function Pet(n, a, g, b, s, t) {
    this.name = n;
    this.age = a;
    this.gender = g;
    this.breed = b;
    this.service = s;
    this.type = t;
}

// Function to register a new pet
function register() {
    // Get form values
    const name = document.getElementById("txtName").value;
    const age = document.getElementById("txtAge").value;
    const gender = document.getElementById("txtGender").value;
    const breed = document.getElementById("txtBreed").value;
    const service = document.getElementById("txtService").value;
    const type = document.getElementById("txtType").value;

    // Create a new pet object
    const newPet = new Pet(name, age, gender, breed, service, type);

    // Validate the pet
    if (isValid(newPet)) {
        // Save the pet to the salon
        salon.pets.push(newPet);

        // Display the registered pets
        displayPetNames();

        // Show a success notification
        showNotifications("Successful");
    } else {
        // Display a notification for invalid input
        showNotifications("Please fill in all the required fields.");
    }
}
function isValid(aPet) {
    let validation = true;

    // Clear the style
    document.getElementById("txtName").classList.remove("alert-error");
    document.getElementById("txtAge").classList.remove("alert-error");
    document.getElementById("txtBreed").classList.remove("alert-error");
    
    if (aPet.name === "") {
        // The pet is not valid
        validation = false;
        document.getElementById("txtName").classList.add("alert-error");
    }

    if (aPet.age === "") {
        // The pet is not valid
        validation = false;
        document.getElementById("txtAge").classList.add("alert-error");
    }
    if (aPet.breed === "") {
        // The pet is not valid
        validation = false;
        document.getElementById("txtBreed").classList.add("alert-error");
    }


    // Add more validation checks for other fields if needed

    return validation;
}


function showNotifications(msg) {
    const notificationsElement = document.getElementById("notifications");
    notificationsElement.textContent = msg;
    notificationsElement.classList.remove("hidden");
}

function displayPetNames() {
    const petListElement = document.getElementById("petList");
    
    // Clear existing pet names
    petListElement.innerHTML = "";

    // Iterate through salon pets and display names
    salon.pets.forEach((pet, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Pet ${index + 1}: ${pet.name}`;
        petListElement.appendChild(listItem);
    });
}

function init() {
    let pet1 = new Pet("Dari", 2, "Female", "Dachshund", "Luxury Package", "Dog");
    salon.pets.push(pet1);
    let pet2 = new Pet("Luna", 9, "Female", "German Shepherd", "Luxury Package", "Dog");
    salon.pets.push(pet2);
    let pet3 = new Pet("Mori", 1, "Female", "Pembroke Welsh Corgi", "Luxury Package", "Dog");
    salon.pets.push(pet3);

    // Display the initially registered pets
    displayPetNames();
}

// Display the initially registered pets when the page loads
document.addEventListener("DOMContentLoaded", init);

// Ensure that the register button click triggers the register function
document.getElementById("registerBtn").addEventListener("click", register);
