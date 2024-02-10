function displayPetNames() {
    const petsContainer = document.getElementById("pets");
    if (!petsContainer) {
        console.error("Element with id 'pets' not found.");
        return;
    }

    // Clear existing content
    petsContainer.innerHTML = "";

    // Create pet cards
    for (let i = 0; i < salon.pets.length; i++) {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
        petCard.innerHTML = `
            <button class="close-button" onclick="deletePet(${i})">×</button>
            <p>Name: ${salon.pets[i].name}</p>
            <p>Age: ${salon.pets[i].age}</p>
            <p>Gender: ${salon.pets[i].gender}</p>
            <p>Breed: ${salon.pets[i].breed}</p>
            <p>Service: ${salon.pets[i].service}</p>
            <p>Type: ${salon.pets[i].type}</p>
            <hr>
        `;
        petsContainer.appendChild(petCard);
    }

    // Create pet table
    const petsTable = document.createElement("table");
    petsTable.id = "petsTable";

    // Create table header
    const headerRow = petsTable.insertRow(0);
    const headerNames = ["Name", "Age", "Gender", "Breed", "Service", "Type", "Actions"];
    for (let i = 0; i < headerNames.length; i++) {
        const headerCell = headerRow.insertCell(i);
        headerCell.innerHTML = headerNames[i];
    }

    // Create table rows
    for (let i = 0; i < salon.pets.length; i++) {
        const petRow = petsTable.insertRow(i + 1);
        const pet = salon.pets[i];
        petRow.insertCell(0).innerHTML = pet.name;
        petRow.insertCell(1).innerHTML = pet.age;
        petRow.insertCell(2).innerHTML = pet.gender;
        petRow.insertCell(3).innerHTML = pet.breed;
        petRow.insertCell(4).innerHTML = pet.service;
        petRow.insertCell(5).innerHTML = pet.type;
        const deleteButtonCell = petRow.insertCell(6);
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function() {
            deletePet(i);
        };
        deleteButtonCell.appendChild(deleteButton);
    }

    // Append the table to the petsContainer
    petsContainer.appendChild(petsTable);
}

function deletePet(index) {
    // Remove the pet from the salon.pets array
    salon.pets.splice(index, 1);

    // Redisplay the updated pet list
    displayPetNames();
}

// Initial display
displayPetNames();