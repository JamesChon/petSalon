let salon={
    name:"the fashion pet",
    phone:"123-456-7890",
    address:{
        street:"Palm",
        number:"262-K",
        zip:"12345"
    }
},
pets:[
    {
        name:"Dari",
        age:2
    },
    {
        name:"Luna",
        age:9
    }
    {
        name:"Mori",
        age:1
    }
]  // pets array

console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
console.log(salon.pets[2].name);
console.log(salon.pets.length);

// use a for loop to travel the array


function displayFooterInfo(){
    
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} the address is ${salon.address.street} ${salon.address.zip}</p>
    `;
    
}
displayFooterInfo();