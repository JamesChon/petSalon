var services=[];
// Similar to window.onload
$(document).ready(function(){
    console.log("Services Page");

    // Add the hook events
    $("#btnService").click(addService);

    // Loading data
    displayItems(services);
});

function Service(description,price){
    this.description = description;
    this.price = price;
}

function addService(){
    let inputService = $("#txtService").val();
    let inputPrice = $("#txtPrice").val();

    let newService =  new Service(inputService,inputPrice);
    services.push(newService);
    saveArray(newService);
    displayItems(services);
}

function displayItems(){
    let items=readItems(); // Gettingh the items from the LS
    let htmlList = $("#services");
    htmlList.html("");
    let li;
    for(let i = 0; i < items.length; i++){
        let item = items[i];
        li = `<li>${items[i].description} - $${item.price}</li>`;
        htmlList.append(li);
    }
}

function getServices() {
    // create predefined obj
    let servicesList = readItems();
    for (let i = 0; i < servicesList.length; i++){
        let service = servicesList[i];
        $('#txtService').append(
            `<option value = "${service.description}">
            ${service.description}</option>`
        )
    }
}