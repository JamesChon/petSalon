function saveArray(item){
    let itemsArray = readItems();
    itemsArray.push(item);
    let val = JSON.stringify(itemsArray); // stringifying the entire array

    localStorage.setItem("services", val);
}

function readItems(){
    // Getting items from the localStorage
    let data = localStorage.getItem("services"); 
    if(!data){ // No data?
        return [];
    } else {
        // If we have data
        let list = JSON.parse(data); // parse the data back
        return list;
    }
}


