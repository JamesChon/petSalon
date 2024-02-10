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
    const name = document.getElementById("txtName");
    const age = document.getElementById("txtAge");
    const breed = document.getElementById("txtBreed");

    // Create a new pet object
    const newPet = new Pet(
        name.value,
        age.value,
        document.getElementById("txtGender").value,
        breed.value,
        document.getElementById("txtService").value,
        document.getElementById("txtType").value
    );

    // Validate the pet
    if (isValid(newPet)) {
        salon.pets.push(newPet);
        displayPetNames();
        // Show success notification
        showNotifications("Successful", "alert-success");
        // Reset input fields
        name.value = "";
        age.value = "";
        breed.value = "";
    } else {
        showNotifications("Please fill in all the required fields.", "alert-error");
    }
}

function showNotifications(msg, className) {
    const notificationsElement = document.getElementById("notifications");
    notificationsElement.textContent = msg;

    // Colors based on user input
    if (className === "alert-error") {
        notificationsElement.style.color = "#B80000";
    } else if (className === "alert-success") {
        notificationsElement.style.color = "#155724";
    }

    notificationsElement.classList.remove("hidden", "alert-error", "alert-success");
    notificationsElement.classList.add(className);

    setTimeout(function () {
        notificationsElement.classList.add("hidden");
    }, 3000);
}

function isValid(aPet) {
    let validation = true;
    document.getElementById("txtName").classList.remove("alert-error");
    document.getElementById("txtAge").classList.remove("alert-error");
    document.getElementById("txtBreed").classList.remove("alert-error");

    if (aPet.name === "") {
        validation = false;
        document.getElementById("txtName").classList.add("alert-error");
    }

    if (aPet.age === "") {
        // Invalid pet input
        validation = false;
        document.getElementById("txtAge").classList.add("alert-error");
    }
    if (aPet.breed === "") {
        // Invalid pet input
        validation = false;
        document.getElementById("txtBreed").classList.add("alert-error");
    }

    return validation;
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

// Display my fur babies
function init() {
    let pet1 = new Pet("Dari", 2, "Female", "Miniature Dachshund", "Luxury Package", "Dog");
    salon.pets.push(pet1);
    let pet2 = new Pet("Luna", 9, "Female", "German Shepherd", "Luxury Package", "Dog");
    salon.pets.push(pet2);
    let pet3 = new Pet("Mori", 1, "Female", "Pembroke Welsh Corgi", "Luxury Package", "Dog");
    salon.pets.push(pet3);

    // Display initially registered fur babies
    displayPetNames();
}

window.onload = init;
document.getElementById("registerBtn").onclick = register;
