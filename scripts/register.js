let salon={
    name:"the fashion pet",
    phone:"123-456-7890",
    address:{
        street:"Palm",
        number:"262-K",
        zip:"12345"
    },
    pets:[]  // pets array
}


//constructor
function pet(n,a,g){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.type=t;
}

function displayPetNames(){
    for(let i=0;i<salon.pets.length;i++){
        document.getElementById("pets").innerHTML=`
        <p>${salon.pets[i].name}</p>
        `
    }
}


let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("textBreed");
let inputService = document.getElementById("textService");
let inputType = document.getElementById("textType");


function register(){
    //get the values from the input
    //use the constructor to create an obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value);
    
}

function init(){
    //creating predifined object
    let pet1=new Pet("Dari",2,"Female");
    let pet2=new Pet("Luna",9,"Female");
    let pet3=new Pet("Mori",1,"Female");
    salon.pets.push(pet1,pet2,pet3)
    //executing functions
    displayPetNames()
}


function displayFooterInfo(){
    
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} the address is ${salon.address.street} ${salon.address.zip}</p>
    `;
    
}

displayFooterInfo();

