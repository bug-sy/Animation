let entries = [{
    "id":1,
    "description":"work income",
    "value":"1000.0",
    "isExpense":false
},{
    "id":2,
    "description":"work",
    "value":"1000.0",
    "isExpense":true
},{
    "id":3,
    "description":"workation",
    "value":"1000.0",
    "isExpense":true
},{
    "id":4,
    "description":"workfaksjfljs",
    "value":"1000.0",
    "isExpense":false
}]



let origDogs = ["Bulldog","beagle","lab"]
let cats = new Array("Amercal curl","Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");

let slicedDogs = origDogs.slice(1,3)
let copyDogs = [...origDogs]
let dogs = origDogs.slice(0);

// entries.map((value,index)=>{
//     console.log("----->",value.description)
// })


let toddlers = entries.filter(person => person.id <= 3)  
console.log("toddlers", toddlers)

