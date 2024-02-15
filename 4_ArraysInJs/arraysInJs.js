// Creating an Array 
// array_name = [item1, item2, item3, ....]
// Arrays are mutable and can be changed
const bikes = ["Honda", "BMW", "Ducati", "Suzuki"];
const bikes_list = [
    "Honda",
    "BMW",
    "Ducati",
    "Suzuki"
]

const bikes_list_one = [];
bikes_list_one[0] = "Honda";
bikes_list_one[1] = "BMW" ;
bikes_list_one[2] = "Ducati";
bikes_list_one[3] = "Suzuki"
console.log(bikes);


// Using the new Keyword
const bikes_collection = new Array("Honda", "BMW", "Ducati", "Suzuki");

// Accessing the last element of array
console.log(bikes_collection[bikes_collection.length - 3])