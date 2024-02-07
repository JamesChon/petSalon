let salon = {
    name: "the fashion pet",
    phone: "123-456-7890",
    address: {
        street: "Palm",
        number: "262-K",
        zip: "12345"
    },
    pets: [] // pets array
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

function displayPetNames() {
    const petsContainer = document.getElementById("pets");
    if (!petsContainer) {
        console.error("Element with id 'pets' not found.");
        return;
    }

    // Clear existing content
    petsContainer.innerHTML = "";

    // Iterate through salon.pets and display information
    for (let i = 0; i < salon.pets.length; i++) {
        const petInfo = document.createElement("div");
        petInfo.innerHTML = `
            <p>Name: ${salon.pets[i].name}</p>
            <p>Breed: ${salon.pets[i].breed}</p>
            <p>Service: ${salon.pets[i].service}</p>
            <hr>
        `;
        petsContainer.appendChild(petInfo);
    }
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

    // Save the pet to the salon
    salon.pets.push(newPet);

    // Display the registered pets
    displayPetNames();
}

// Display the initially registered pets when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayPetNames();
});

// Ensure that the register button click triggers the register function
document.getElementById("registerBtn").addEventListener("click", register);
