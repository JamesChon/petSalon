function saveArray(item,key){
    let itemsArray = readItems();
    itemsArray.push(item);
    let val = JSON.stringify(itemsArray); // stringifying the entire array

    localStorage.setItem(key, val);
}

function readItems(key){
    // Getting items from the localStorage
    let data = localStorage.getItem(key); 
    if(!data){ // No data?
        return [];
    } else {
        // If we have data
        let list = JSON.parse(data); // parse the data back
        return list;
    }
}


